/* ============================================================
   Team roster.
   To add a person: copy an object below and fill it in.
   Leave a link as "" (empty string) to hide that icon.
   "photo" is optional — path to an image in assets/people/.
   Leaving photo empty shows the person's initials instead.
   "bio" is optional — a sentence or two. Leave it "" to omit it.
   "links.email" is a plain address (no "mailto:" needed) — the mailto
   link is built automatically. Leave it "" to hide the icon.
   ============================================================ */

const TEAM = [
  {
    name: "Alex(andre) Hyafil",
    role: "Principal Investigator",
    photo: "assets/people/alexh.jpg",
    bio: " Alex’ journey into neuroscience got him to wonder about very different neural systems (executive functions, speech perception, perceptual decision-making, etc.) from very different scales but with a common mantra: understanding the computations underlying cognition. After his PhD with Etienne Koechlin at Université Pierre et Marie Curie (Paris), he did various postdocs in Paris, Barcelona and Princeton. He started as a group leader in 2019 at the CRM. Alex teaches Neuro-AI, computational neuroscience and data analysis at the Brain & Cognition Masters (UPF). He’s also the proud co-founder of the <a href='https://www.bambschool.org'> BAMB! summer school</a> summer school, dedicated to teaching the beautiful intricacies of modelling behavioural data to young wizards.",
   links: {
      email: "alexandre.hyafil@gmail.com",
      website: "",
      github: "https://github.com/ahyafil/",
      bluesky: "https://bsky.app/profile/alexhyafil.bsky.social",
      scholar: "https://scholar.google.com/citations?user=gTse62wAAAAJ"
    }
  },
  {
    name: "Lucía Arancibia",
    role: "PhD Student (co-supervisor: Klaus Wimmer)",
    photo: "assets/people/lucia.jpg",
    bio: "Lucía studied Biomedical Engineering at the UPM in Madrid, where she became interested in the interface between neuroscience and engineering. She then studied a Master of Science in Neurotechnology at Imperial College London and carried out her master’s thesis at Clopath’s Lab. In 2021 she joined the Perea lab at the Cajal Institute (CSIC) as a research assistant, where she worked on in vivo electrophysiology. Since 09/2022, she is a PhD student at the Computational Neuroscience Unit at the CRM working on spatiotemporal stimulus integration in perceptual decision making.",
links: {
      email: "",
      website: "",
      github: "https://github.com/luciadearancibia",
      bluesky: "",
      scholar: ""
    }
 },
  {
    name: "Alexandre García-Duran",
    role: "PhD Student (co-supervisor: Manuel Molano-Mazón)",
        bio: "Alex wants to understand how neural systems perceive, and how their structure makes that perception robust or fragile. He studies these questions in both brains and artificial networks, using probabilistic inference and machine learning.",
photo: "assets/people/babyalex.jpg",
    links: {
      email: "",
      website: "https://alexgarciaduran.github.io/",
      github: "https://github.com/alexgarciaduran",
      bluesky: "",
      scholar: ""
    }
 },
{
    name: "Haowen (Howie) Tang",
    role: "PhD Student",
    photo: "",
    bio: "",
	links: {
      email: "",
      website: "",
      github: "",
      bluesky: "",
      scholar: ""
    }
 },
{
    name: "Anamaria Isaia",
    role: "master Student",
    photo: "",
    bio: "",
	links: {
      email: "",
      website: "",
      github: "",
      bluesky: "",
      scholar: ""
    }
 },
 {
     name: "Lucía Sánchez",
     role: "master Student",
     photo: "",
     bio: "",
 	links: {
       email: "",
       website: "",
       github: "",
       bluesky: "",
       scholar: ""
     }
  }
];

/* Former lab members. Same shape as TEAM.
   "role" here is a good place for e.g. "PhD 2024, now at ..." */
const ALUMNI = [
  {
    name: "Lluís Hernández-Navarro",
    role: "postdoc, now lecturer at Universitat Politècnica de Catalunya",
        bio: "",
    photo: "assets/people/lluis.png",
    links: {
      email: "",
      website: "https://futur.upc.edu/42805054",
      github: "",
      bluesky: "",
      scholar: "https://scholar.google.com/citations?user=MTPKujEAAAAJ"
    }
  },
  {
    name: "Manuel Molano-Mazón",
    role: "postdoc, now Ramón y Cajal professor at Universitat Politècnica de Catalunya",
        bio: "",
    photo: "",
    links: {
      email: "",
      website: "https://futur.upc.edu/ManuelMolanoMazon",
      github: "",
      bluesky: "",
      scholar: ""
    }
  },
  {
    name: "María da Fonseca",
    role: "postdoc, now faculty at Conicet (Argentina)",
        bio: "",
    photo: "",
    links: {
      email: "",
      website: "",
      github: "https://github.com/mariadafon/",
      bluesky: "",
      scholar: "https://scholar.google.com/citations?user=Fc7XJ48AAAAJ&hl"
    }
  },
   {
     name: "Martijn Wokke",
     role: "postdoc, now Ramón y Cajal professor at Universitat de Gerona",
         bio: "",
     photo: "",
     links: {
       email: "",
       website: "https://sites.google.com/view/martijnwokke/home",
       github: "",
       bluesky: "",
       scholar: ""
     }
   },
   {
     name: "Neus Pou-Amengual",
     role: "research assistant, now at Olobion (industry)",
     bio: "",
     photo: "",
     links: {
       email: "",
       website: "https://www.olobion.ai/team/neus-pou-amengual/",
       github: "",
       bluesky: "",
       scholar: ""
     }
   },
   {
     name: "Pau Blanco-Arnau",
     role: "research assistant (2019-2020)",
     bio: "",
     photo: "assets/people/pau.jpg",
     links: {
       email: "",
       website: "",
       github: "",
       bluesky: "",
       scholar: ""
     }
   }
];

/* ---------- Icon SVGs (monochrome, inherit color via currentColor) ---------- */

const ICONS = {
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6l9 6.5L21 6"/></svg>`,
  website: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>`,
  bluesky: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 8.5c-1.1-2.2-4.1-6.2-6.9-8.2C2.4-1.4 1.2-.9.5.1-.3 1.3.1 8.6 1 10c1.1 1.7 4.7 2.3 6.7 2-.1 0-.1 0 0 0-2.9.4-5.5 1.5-2.1 5.3 3.7 4 5.1-.9 5.8-3.2.1-.4.2-.4.3 0 .7 2.3 2.1 7.2 5.8 3.2 3.4-3.8.8-4.9-2.1-5.3.1 0 .1 0 0 0 2 .3 5.6-.3 6.7-2 .9-1.4 1.3-8.7.5-9.9-.7-1-1.9-1.5-4.6.2C16.1 2.3 13.1 6.3 12 8.5z"/></svg>`,
  scholar: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 8l11 6 9-4.9V17h2V8L12 2zM5 12.2V16c0 2.2 3.1 4 7 4s7-1.8 7-4v-3.8l-7 3.8-7-3.8z"/></svg>`
};

const ICON_LABELS = {
  email: "Email",
  website: "Personal website",
  github: "GitHub",
  bluesky: "Bluesky",
  scholar: "Google Scholar"
};

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function renderPersonLinks(links) {
  return Object.entries(links)
    .filter(([, url]) => url)
    .map(
      ([key, url]) => `
        <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${ICON_LABELS[key]}">
          ${ICONS[key]}
        </a>`
    )
    .join("");
}

function renderPeopleGrid(gridId, people) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = people.map((person) => {
    const photoEl = person.photo
      ? `<img class="person-photo" src="${person.photo}" alt="${person.name}">`
      : `<div class="person-photo" aria-hidden="true">${initials(person.name)}</div>`;

    const bioEl = person.bio ? `<p class="person-bio">${person.bio}</p>` : "";

    return `
      <div class="person-card">
        ${photoEl}
        <div class="person-details">
          <p class="person-name">${person.name}</p>
          <p class="person-role">${person.role}</p>
          ${bioEl}
          <div class="person-links">
            ${renderPersonLinks(person.links)}
          </div>
        </div>
      </div>`;
  }).join("");
}

function renderTeam() {
  renderPeopleGrid("people-grid", TEAM);
  renderPeopleGrid("alumni-grid", ALUMNI);

  // Hide the "Alumni" heading if there's no one to show
  const alumniHeading = document.getElementById("alumni-heading");
  if (alumniHeading && ALUMNI.length === 0) {
    alumniHeading.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", renderTeam);