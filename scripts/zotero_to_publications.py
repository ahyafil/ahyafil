#!/usr/bin/env python3
"""
Convert a Zotero CSL-JSON export into js/publications-data.js
for the lab website.

How to export from Zotero:
  1. Select your collection (or the whole library).
  2. Right-click -> Export Items... (or File -> Export Library...)
  3. Format: "CSL JSON"
  4. Save the file, e.g. as zotero-export.json

Usage:
  python3 zotero_to_publications.py zotero-export.json js/publications-data.js

Notes:
  - Only journalArticle / conference-paper / paper-conference / chapter /
    book / preprint style entries are included by default; adjust
    INCLUDE_TYPES below if you want more/fewer Zotero item types.
  - "pdf" link is left empty (Zotero's CSL export doesn't carry file
    attachments) — fill those in by hand afterwards if you want direct
    PDF links, or point them at a repository/preprint URL instead.
  - "doi" is filled automatically when present.
  - "code" is always left empty — fill in by hand if you have a repo.
  - Re-running this script overwrites publications-data.js entirely,
    so make any manual edits (bios, pdf links, etc.) in Zotero notes,
    or keep a copy of your manual additions to re-apply after export.
"""

import json
import sys

INCLUDE_TYPES = {
    "article-journal",
    "paper-conference",
    "chapter",
    "book",
    "manuscript",
    "report",
}

TEMPLATE_HEADER = """/* ============================================================
   Publications list.
   Generated from a Zotero CSL-JSON export via zotero_to_publications.py.
   To update: re-export from Zotero and re-run the script, or hand-edit
   individual entries below.
   Leave any link ("pdf", "doi", "code") as "" to hide it.
   ============================================================ */

const PUBLICATIONS = [
"""

TEMPLATE_FOOTER = """];

function renderPublications() {
  const list = document.getElementById("publications-list");
  if (!list) return;

  const byYear = {};
  PUBLICATIONS.forEach((pub) => {
    if (!byYear[pub.year]) byYear[pub.year] = [];
    byYear[pub.year].push(pub);
  });

  const years = Object.keys(byYear).sort((a, b) => b - a);

  list.innerHTML = years
    .map((year) => {
      const entries = byYear[year]
        .map((pub) => {
          const links = Object.entries(pub.links)
            .filter(([, url]) => url)
            .map(
              ([key, url]) =>
                `<a href="${url}" target="_blank" rel="noopener noreferrer">${key.toUpperCase()}</a>`
            )
            .join(" · ");

          return `
            <li class="pub-item">
              <p class="pub-title">${pub.title}</p>
              <p class="pub-meta">${pub.authors} — <em>${pub.venue}</em></p>
              ${links ? `<p class="pub-links">${links}</p>` : ""}
            </li>`;
        })
        .join("");

      return `
        <div class="pub-year-block">
          <h2>${year}</h2>
          <ul class="pub-list">${entries}</ul>
        </div>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", renderPublications);
"""


def format_authors(creators):
    names = []
    for c in creators:
        if c.get("literal"):
            names.append(c["literal"])
            continue
        family = c.get("family", "").strip()
        given = c.get("given", "").strip()
        if not family and not given:
            continue
        initials = " ".join(f"{p[0]}." for p in given.split() if p)
        names.append(f"{family}, {initials}" if initials else family)
    if not names:
        return "Unknown author"
    if len(names) == 1:
        return names[0]
    return ", ".join(names[:-1]) + f", & {names[-1]}"


def get_year(item):
    issued = item.get("issued", {})
    parts = issued.get("date-parts", [[]])
    if parts and parts[0]:
        return str(parts[0][0])
    return "n.d."


def js_escape(s):
    return (s or "").replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def convert(items):
    entries = []
    for item in items:
        if item.get("type") not in INCLUDE_TYPES:
            continue
        title = js_escape(item.get("title", "Untitled"))
        authors = js_escape(format_authors(item.get("author", [])))
        venue = js_escape(
            item.get("container-title")
            or item.get("publisher")
            or item.get("collection-title")
            or ""
        )
        year = get_year(item)
        doi = item.get("DOI", "")
        doi_url = f"https://doi.org/{doi}" if doi else ""
        url = item.get("URL", "") if not doi_url else ""

        entries.append(
            f"""  {{
    year: "{year}",
    authors: "{authors}",
    title: "{title}",
    venue: "{venue}",
    links: {{
      pdf: "",
      doi: "{doi_url}",
      code: "{js_escape(url) if url else ''}"
    }}
  }}"""
        )
    return entries


def main():
    if len(sys.argv) != 3:
        print("Usage: python3 zotero_to_publications.py <zotero-export.json> <output publications-data.js>")
        sys.exit(1)

    in_path, out_path = sys.argv[1], sys.argv[2]

    with open(in_path, "r", encoding="utf-8") as f:
        items = json.load(f)

    if isinstance(items, dict) and "items" in items:
        items = items["items"]  # some export variants wrap in {"items": [...]}

    entries = convert(items)
    # newest first
    entries_with_year = list(zip(entries, [get_year(i) for i in items if i.get("type") in INCLUDE_TYPES]))
    entries_with_year.sort(key=lambda pair: pair[1], reverse=True)
    entries = [e for e, _ in entries_with_year]

    body = ",\n".join(entries)

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(TEMPLATE_HEADER + body + "\n" + TEMPLATE_FOOTER)

    print(f"Wrote {len(entries)} publications to {out_path}")


if __name__ == "__main__":
    main()
