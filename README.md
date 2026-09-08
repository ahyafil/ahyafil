# Lab Name — website

A plain HTML/CSS/JS site, no build step. Free to host, ad-free.

## Editing

* **Site name, tagline, GitHub link:** edit the `<a class="site-title">` and the
GitHub `href` near the top of each `.html` file (three places — index, research, people).
* **News:** edit the `<li class="news-item">` blocks in `index.html`. Copy one to add an entry.
* **Research:** edit the `<div class="research-block">` sections in `research.html`.
Copy one to add a new research theme.
* **Team:** edit the `TEAM` array at the top of `js/team-data.js`. Each person is:

```js
  {
    name: "Jane Doe",
    role: "Postdoc",
    photo: "assets/people/jane.jpg",   // or "" for initials
    links: {
      website: "https://...",
      github: "https://github.com/...",
      bluesky: "https://bsky.app/profile/...",
      scholar: "https://scholar.google.com/citations?user=..."
    }
  }
  ```

  Leave any link as `""` and that icon is hidden automatically. Add photos to
`assets/people/` and point `photo` at the file.

* **Colors/fonts:** all in `css/style.css`, at the top under `:root`.

## Hosting on GitHub Pages (free, no ads)

1. Create a new GitHub repository, e.g. `your-lab.github.io` (using your GitHub
username/org gives you the shortest free URL) — or any repo name if you're
fine with a `/repo-name/` path.
2. Push these files to the repo's root (or `main` branch).
3. In the repo, go to **Settings → Pages**, set the source to the `main`
branch, root folder, and save.
4. Your site is live at `https://<username>.github.io` (or
`https://<username>.github.io/<repo-name>/`) within a minute or two.
5. Optional: add a custom domain for free under Settings → Pages → Custom domain.

No Jekyll, no Ruby, no build process required — GitHub Pages serves these
files as-is.

