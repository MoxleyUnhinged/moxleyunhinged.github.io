const projects = [
  {
    name: "Code Coach",
    category: "Learning app",
    description:
      "A desktop learning space for Python, C++, and C#. Work through bite-sized lessons, save drafts, and build a study streak — all stored locally.",
    technologies: ["Python", "PySide6"],
    filters: ["Python"],
    mark: "{ }",
    repository: "CoachCoder",
  },
  {
    name: "Dungeon Tank Captain",
    category: "Game toolkit",
    description:
      "A D&D 5e campaign toolkit pairing a C rules engine with a Python desktop app for character building, encounters, dice, monsters, and session notes.",
    technologies: ["Python", "C", "Qt"],
    filters: ["Python", "C"],
    mark: "d20",
    repository: "DungeonTankCaptain",
  },
  {
    name: "Blood Country",
    category: "RPG web UI",
    description:
      "A browser-based toolkit for an Australian-folklore-inspired tabletop RPG, with campaign, character, lore, and encounter tools.",
    technologies: ["JavaScript", "CSS"],
    filters: ["Web"],
    mark: "✳",
    repository: "blood-country",
  },
  {
    name: "IOTA",
    category: "Web experience",
    description:
      "A game project exploring a graphical interface and a companion website.",
    technologies: ["CSS", "Web"],
    filters: ["Web"],
    mark: "◎",
    repository: "IOTA",
  },
];

const projectGrid = document.querySelector("#project-grid");
const projectCount = document.querySelector("#project-count");
const emptyState = document.querySelector("#empty-state");
const filterButtons = document.querySelectorAll(".filter-button");

function createProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card";

  const topLine = document.createElement("div");
  topLine.className = "card-topline";

  const number = document.createElement("span");
  number.className = "project-number";
  number.textContent = `PROJECT / ${String(index + 1).padStart(2, "0")}`;

  const mark = document.createElement("span");
  mark.className = "project-mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = project.mark;

  const category = document.createElement("span");
  category.className = "project-kind";
  category.textContent = project.category;

  topLine.append(number, mark);

  const title = document.createElement("h3");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  const footer = document.createElement("div");
  footer.className = "card-footer";

  const techList = document.createElement("div");
  techList.className = "tech-list";
  techList.setAttribute("aria-label", "Technologies");
  project.technologies.forEach((technology) => {
    const tag = document.createElement("span");
    tag.className = "tech-tag";
    tag.textContent = technology;
    techList.append(tag);
  });

  const repoLink = document.createElement("a");
  repoLink.className = "repo-link";
  repoLink.href = `https://github.com/MoxleyUnhinged/${encodeURIComponent(project.repository)}`;
  repoLink.target = "_blank";
  repoLink.rel = "noreferrer";
  repoLink.setAttribute("aria-label", `View ${project.name} on GitHub`);
  repoLink.append(document.createTextNode("View repo"));
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  repoLink.append(arrow);

  footer.append(techList, repoLink);
  card.append(topLine, category, title, description, footer);
  return card;
}

function renderProjects(filter = "all") {
  const visibleProjects = projects.filter(
    (project) => filter === "all" || project.filters.includes(filter),
  );
  projectGrid.replaceChildren(
    ...visibleProjects.map((project) =>
      createProjectCard(project, projects.indexOf(project)),
    ),
  );
  projectCount.textContent = `${String(visibleProjects.length).padStart(2, "0")} PROJECTS`;
  emptyState.hidden = visibleProjects.length > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderProjects(filter);
  });
});

renderProjects();
