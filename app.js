let currentProjectIndex = 0;
let screenshotCarouselTimer = null;

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects("academico", "academic-projects-grid");
  renderProjects("autoral", "personal-projects-grid");
  renderExperiences();
  renderExtensionCourses();
  renderLanguages();
  renderDiplomaWall("all");
  setupFilters();

  const certCountEl = document.getElementById("cert-count");
  if (certCountEl) {
    certCountEl.textContent = PORTFOLIO_DATA.certificatesWall.length;
  }
});

function switchMainView(viewName) {
  document.querySelectorAll(".view-section").forEach((sec) => {
    sec.classList.remove("active");
  });

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });

  if (viewName === "master") {
    document.getElementById("view-master").classList.add("active");
  } else if (viewName === "wall") {
    document.getElementById("view-wall").classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProjects(category, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const filtered = PORTFOLIO_DATA.projects.filter((p) => p.category === category);

  grid.innerHTML = filtered
    .map((proj) => {
      const realIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.id === proj.id);
      const techTags = proj.technologies
        .slice(0, 5)
        .map((t) => `<span class="tech-badge">${t}</span>`)
        .join("");

      return `
        <article class="project-card" onclick="openProjectScreen(${realIndex})">
          <div class="project-card-top">
            <div class="project-meta-row">
              <span class="semester-pill">${proj.semester}</span>
              <span class="mono-label">${proj.projectTypeLabel || (proj.category === "academico" ? "FATEC" : "AUTORAL")}</span>
            </div>
            <h3>${proj.title}</h3>
            <p class="project-short-desc">${proj.shortDescription}</p>
            <div class="tech-stack-row">${techTags}</div>
          </div>
          <div class="project-card-footer">
            <span>Ver projeto</span>
            <span>→</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function openProjectScreen(index) {
  window.clearInterval(screenshotCarouselTimer);
  screenshotCarouselTimer = null;

  currentProjectIndex = index;
  const proj = PORTFOLIO_DATA.projects[index];
  if (!proj) return;

  document.querySelectorAll(".view-section").forEach((sec) => sec.classList.remove("active"));
  document.getElementById("view-project-detail").classList.add("active");

  const techList = proj.technologies.map((t) => `<span class="tech-badge">${t}</span>`).join("");
  const screenshots = proj.screenshots.filter((shot) => shot.imagePath);
  const screenshotsHtml = screenshots
    .map((shot, index) => `
      <figure class="screenshot-slide" role="group" aria-roledescription="slide" aria-label="${index + 1} de ${screenshots.length}" aria-hidden="${index !== 0}">
        <img class="project-screenshot" src="${shot.imagePath}" alt="Captura de tela ${index + 1} de ${proj.title}">
      </figure>`)
    .join("");
  const screenshotControls = screenshots.length > 1
    ? `<div class="screenshot-controls">
        <button class="btn-outline mono-label" type="button" data-carousel-prev aria-label="Captura anterior">←</button>
        <span class="screenshot-counter" aria-live="polite">1 / ${screenshots.length}</span>
        <button class="btn-outline mono-label" type="button" data-carousel-next aria-label="Próxima captura">→</button>
      </div>`
    : "";

  const repoButton = proj.repoUrl
    ? `<a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">Código no GitHub ↗</a>`
    : "";
  const liveButton = proj.liveUrl
    ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener" class="btn-secondary">Ver Projeto Online ↗</a>`
    : "";
  const linksHtml = repoButton || liveButton
    ? `<div class="project-detail-links">${repoButton}${liveButton}</div>`
    : "";
  const technologiesHtml = proj.technologies.length
    ? `<div class="project-technologies">
        <span class="mono-label">Tecnologias</span>
        <div class="tech-stack-row">${techList}</div>
      </div>`
    : "";
  const screenshotsSection = `
    <div class="detail-panel screenshot-panel">
      <h3>Capturas de tela</h3>
      <div class="screenshots-carousel" data-carousel-count="${screenshots.length}">
        <div class="screenshots-viewport">
          <div class="screenshots-track">
            ${screenshotsHtml}
          </div>
        </div>
        ${screenshotControls}
      </div>
    </div>`;

  const detailContainer = document.getElementById("project-detail-content");
  detailContainer.innerHTML = `
    <div class="detail-header-box">
      <span class="semester-pill">${proj.semester}</span>
      <h1 class="detail-title">${proj.title}</h1>
      <p style="font-size:1.08rem; color:var(--text-secondary); margin-bottom:20px;">${proj.subtitle}</p>
      
      ${linksHtml}
    </div>

    <div class="detail-grid contribution-grid">
      <div class="detail-panel contribution-panel">
        <h3>Minha contribuição</h3>
        <p>${proj.fullDescription}</p>
        ${technologiesHtml}
      </div>

    </div>

    ${screenshotsSection}
  `;

  initScreenshotCarousel(detailContainer);

  document.getElementById("prevProjectBtn").onclick = () => {
    const prev = (currentProjectIndex - 1 + PORTFOLIO_DATA.projects.length) % PORTFOLIO_DATA.projects.length;
    openProjectScreen(prev);
  };
  document.getElementById("nextProjectBtn").onclick = () => {
    const next = (currentProjectIndex + 1) % PORTFOLIO_DATA.projects.length;
    openProjectScreen(next);
  };

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initScreenshotCarousel(container) {
  const carousel = container.querySelector(".screenshots-carousel");
  const count = Number(carousel.dataset.carouselCount);
  if (count < 2) return;

  const track = carousel.querySelector(".screenshots-track");
  const slides = Array.from(carousel.querySelectorAll(".screenshot-slide"));
  const counter = carousel.querySelector(".screenshot-counter");
  let activeSlide = 0;

  const showSlide = (index) => {
    activeSlide = (index + count) % count;
    track.style.transform = `translateX(-${activeSlide * 100}%)`;
    counter.textContent = `${activeSlide + 1} / ${count}`;
    slides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", String(slideIndex !== activeSlide));
    });
  };

  const stopAutoplay = () => {
    window.clearInterval(screenshotCarouselTimer);
    screenshotCarouselTimer = null;
  };

  const startAutoplay = () => {
    stopAutoplay();
    screenshotCarouselTimer = window.setInterval(() => showSlide(activeSlide + 1), 7000);
  };

  carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => {
    showSlide(activeSlide - 1);
    startAutoplay();
  });
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => {
    showSlide(activeSlide + 1);
    startAutoplay();
  });
  carousel.addEventListener("focusin", stopAutoplay);
  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) startAutoplay();
  });

  startAutoplay();
}

function closeProjectScreen() {
  switchMainView("master");
  const sec = document.getElementById("sec-projetos");
  if (sec) sec.scrollIntoView({ behavior: "smooth" });
}

function renderExperiences() {
  const list = document.getElementById("experience-list");
  if (!list) return;

  list.innerHTML = PORTFOLIO_DATA.experiences
    .map((exp) => {
      const steps = exp.progression.map((r) => `<span class="role-step">${r}</span>`).join("");
      const acts = exp.activities.map((a) => `<li>${a}</li>`).join("");

      return `
        <div class="exp-card">
          <div class="exp-top">
            <div>
              <h3 class="exp-company">${exp.company}</h3>
              <strong style="color:var(--text-secondary); font-size:0.95rem;">Cargo/Função Principal: ${exp.currentRole}</strong>
            </div>
            <span class="exp-dates">${exp.period}</span>
          </div>
          <div class="exp-role-progression">${steps}</div>
          <ul class="exp-activities">${acts}</ul>
        </div>
      `;
    })
    .join("");
}

function renderExtensionCourses() {
  const tbody = document.getElementById("extension-tbody");
  if (!tbody) return;

  tbody.innerHTML = PORTFOLIO_DATA.extensionCourses
    .map(
      (c) => `
      <tr>
        <td><strong><a href="${c.credentialUrl}" target="_blank" rel="noopener noreferrer">${c.name}</a></strong></td>
        <td>${c.institution}<br><span style="font-size:0.78rem; color:var(--text-secondary);">${c.location}</span></td>
        <td class="mono-label">${c.hours}</td>
        <td class="mono-label" style="font-size:0.74rem;">${c.startEnd}</td>
      </tr>
    `
    )
    .join("");
}

function renderLanguages() {
  const container = document.getElementById("languages-list");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.languages
    .map(
      (l) => `
      <div class="lang-item">
        <div class="lang-top">
          <strong>${l.language}</strong>
          <span class="lang-level mono-label">${l.level}</span>
        </div>
        <p>${l.notes}</p>
      </div>
    `
    )
    .join("");
}

function renderDiplomaWall(category) {
  const grid = document.getElementById("diploma-wall-grid");
  if (!grid) return;

  const list = category === "all"
    ? PORTFOLIO_DATA.certificatesWall
    : PORTFOLIO_DATA.certificatesWall.filter((c) => c.category === category);

  grid.innerHTML = list
    .map(
      (cert) => `
      <article class="diploma-frame" role="button" tabindex="0" aria-label="Ver ${cert.title}" onclick="openDiplomaModal('${cert.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openDiplomaModal('${cert.id}')}">
        <div>
          <div class="diploma-pin"></div>
          <div class="diploma-issuer">${cert.issuer}</div>
          <h3 class="diploma-title">${cert.title}</h3>
        </div>
        <div class="diploma-footer">
          <div>
            <div>${cert.date}</div>
            ${cert.hours ? `<div>Carga: ${cert.hours}</div>` : ""}
          </div>
          <div class="diploma-seal" aria-hidden="true">↗</div>
        </div>
      </article>
    `
    )
    .join("");
}

function openDiplomaModal(certId) {
  const cert = PORTFOLIO_DATA.certificatesWall.find((c) => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById("diplomaModal");
  const body = document.getElementById("diploma-modal-body");

  body.innerHTML = `
    <div class="diploma-issuer">${cert.issuer}</div>
    <h2 class="diploma-title">${cert.title}</h2>
    <div class="diploma-image-wrap diploma-online-preview">
      <div class="certificate-preview">
        <span>Certificado digital · ${cert.issuer}</span>
        <strong>Felipe da Silva Moreno</strong>
        <h3>${cert.title}</h3>
        <p>${cert.date}${cert.hours ? ` · ${cert.hours}` : ""}</p>
        <a class="btn-primary" href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer">Abrir certificado original ↗</a>
      </div>
    </div>
    <div class="diploma-details">
      <div><strong>Data:</strong> ${cert.date}</div>
      ${cert.hours ? `<div><strong>Carga horária:</strong> ${cert.hours}</div>` : ""}
      <div><strong>Instituição:</strong> ${cert.issuer}</div>
    </div>
  `;

  modal.classList.add("open");
}

function closeDiplomaModal(event) {
  if (!event || event.target.id === "diplomaModal") {
    document.getElementById("diplomaModal").classList.remove("open");
  }
}

function setupFilters() {
  document.querySelectorAll("#wall-filters .filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#wall-filters .filter-chip").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderDiplomaWall(btn.dataset.certFilter);
    });
  });
}

function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
  });
}