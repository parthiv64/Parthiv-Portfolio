// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();

/* ========== 3D Cube with Name (Three.js) ========== */

(function initCube() {
  const container = document.getElementById("cube-container");
  if (!container || !window.THREE) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x020617);

  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  container.appendChild(renderer.domElement);

  // Create canvas with "Tushar Lilhare" text for cube faces
  function createTextTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 512, 512);
    grad.addColorStop(0, "#1e293b");
    grad.addColorStop(1, "#0f172a");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Border glow
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 8;
    ctx.strokeRect(24, 24, 512 - 48, 512 - 48);

    // Text
    ctx.font = "bold 60px system-ui";
    ctx.fillStyle = "#e5e7eb";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Parthiv", 256, 220);

    ctx.font = "bold 52px system-ui";
    ctx.fillStyle = "#a5b4fc";
    ctx.fillText("Kshirsagar", 256, 300);

    // Small tagline
    ctx.font = "24px system-ui";
    ctx.fillStyle = "#22c55e";
    ctx.fillText("Full Stack Dev", 256, 360);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  const textTexture = createTextTexture();

  const geometry = new THREE.BoxGeometry(2.2, 2.2, 2.2);
  const materials = [];

  for (let i = 0; i < 6; i++) {
    materials.push(
      new THREE.MeshStandardMaterial({
        map: textTexture,
        roughness: 0.35,
        metalness: 0.45,
      })
    );
  }

  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambient);

  const directional = new THREE.DirectionalLight(0x6366f1, 1.1);
  directional.position.set(3, 3, 4);
  scene.add(directional);

  const point = new THREE.PointLight(0x22c55e, 0.6, 15);
  point.position.set(-2, -3, 3);
  scene.add(point);

  // Animation
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.012;
    renderer.render(scene, camera);
  }
  animate();

  // Resize handling
  window.addEventListener("resize", () => {
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    if (!newWidth || !newHeight) return;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });
})();

/* ========== GitHub Repos Fetch ========== */

const GITHUB_USERNAME = "parthiv64";

async function loadGitHubRepos() {
  const grid = document.getElementById("projects-grid");
  const errorEl = document.getElementById("projects-error");
  if (!grid) return;

  grid.innerHTML = "<p>Loading projects from GitHub...</p>";

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );

    if (!response.ok) {
      throw new Error("GitHub API error");
    }

    const repos = await response.json();

    grid.innerHTML = "";

    if (!repos.length) {
      grid.innerHTML = "<p>No public repositories found.</p>";
      return;
    }

    repos.forEach((repo) => {
      const card = document.createElement("div");
      card.className = "card project-card";

      const name = document.createElement("div");
      name.className = "project-name";
      name.textContent = repo.name;

      const meta = document.createElement("div");
      meta.className = "project-meta";
      const lang = repo.language ? repo.language : "Language: N/A";
      const stars = `★ ${repo.stargazers_count}`;
      meta.textContent = `${lang} • ${stars}`;

      const desc = document.createElement("div");
      desc.className = "project-desc";
      desc.textContent =
        repo.description || "No description provided. Check the repository for details.";

      const tags = document.createElement("div");
      tags.className = "project-tags";

      if (repo.language) {
        const t = document.createElement("span");
        t.className = "project-tag";
        t.textContent = repo.language;
        tags.appendChild(t);
      }

      if (repo.fork) {
        const t = document.createElement("span");
        t.className = "project-tag";
        t.textContent = "Forked";
        tags.appendChild(t);
      }

      const link = document.createElement("a");
      link.className = "project-link";
      link.href = repo.html_url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "View on GitHub →";

      card.appendChild(name);
      card.appendChild(meta);
      card.appendChild(desc);
      card.appendChild(tags);
      card.appendChild(link);

      grid.appendChild(card);
    });

    if (errorEl) errorEl.classList.add("hidden");
  } catch (err) {
    console.error(err);
    grid.innerHTML = "";
    if (errorEl) errorEl.classList.remove("hidden");
  }
}

loadGitHubRepos();

/* ========== Contact Form → WhatsApp ========== */

function openWhatsAppFromForm(e) {
  e.preventDefault();
  const name = document.getElementById("cf-name").value.trim();
  const role = document.getElementById("cf-role").value.trim();
  const message = document.getElementById("cf-message").value.trim();

  let intro = "Hi Parthiv";
  if (name) intro += `, I am ${name}`;
  if (role) intro += ` (${role})`;
  intro += ".";

  const fullMsg = intro + "\n\n" + message;
  const encoded = encodeURIComponent(fullMsg);

  const url = `https://wa.me/917067211314?text=${encoded}`;
  window.open(url, "_blank");
}
