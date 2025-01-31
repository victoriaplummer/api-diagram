import { gsap } from "https://cdn.skypack.dev/gsap";
import * as d3 from "https://cdn.skypack.dev/d3";
import { apiCards, connections } from "./data.js";
import MarkdownIt from "https://cdn.skypack.dev/markdown-it";

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
  replaceLink: function (link) {
    return link;
  },
}).use(function (md) {
  const defaultRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    token.attrSet("target", "_blank");
    token.attrSet("rel", "noopener noreferrer");
    return defaultRender(tokens, idx, options, env, self);
  };
});

let svg;

function initApiDiagram() {
  const container = document.querySelector(".api-diagram-container");
  container.innerHTML = "";

  // Create columns
  const columns = [1, 2, 3, 4].map((colNum) => {
    const column = document.createElement("div");
    column.className = "api-column";
    column.setAttribute("data-column", colNum);
    return column;
  });

  // Add cards to their respective columns
  apiCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "api-card";
    cardElement.setAttribute("data-section", card.section);

    if (card.info) {
      cardElement.onclick = (e) => {
        e.preventDefault();
        showModal(card);
      };
    } else if (card.docsLink) {
      cardElement.onclick = () =>
        window.open(card.docsLink, "_blank", "noopener,noreferrer");
    }

    const cardContent = document.createElement("div");
    cardContent.className = "api-card-content";

    // Create an img element for the icon that will be replaced with SVG
    const iconHtml = card.icon
      ? `<span class="card-icon"><img src="${card.icon}" alt="" /></span>`
      : "";

    cardContent.innerHTML = `
      <h3>${iconHtml}${card.title}</h3>
      <p>${card.description}</p>
    `;

    cardElement.appendChild(cardContent);
    columns[card.column - 1].appendChild(cardElement);
  });

  // Add columns to container
  columns.forEach((column) => container.appendChild(column));

  // Create SVG layer
  svg = d3
    .select(".api-diagram-container")
    .append("svg")
    .attr("class", "connections-layer")
    .style("position", "absolute")
    .style("top", 0)
    .style("left", 0)
    .style("pointer-events", "none")
    .style("z-index", 1);

  // After everything is added, replace icon images with inline SVGs
  document.querySelectorAll(".card-icon img").forEach((img) => {
    fetch(img.src)
      .then((response) => response.text())
      .then((svgContent) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
        const svg = svgDoc.querySelector("svg");
        if (svg) {
          svg.classList.add("icon-svg");
          img.parentNode.replaceChild(svg, img);
        }
      })
      .catch(console.error);
  });

  drawConnectors();
  initResizeObserver();
}

function drawConnectors() {
  // Clear existing connections
  svg.selectAll("*").remove();

  // Update SVG size to match container
  const container = document.querySelector(".api-diagram-container");
  svg
    .attr("width", container.offsetWidth)
    .attr("height", container.offsetHeight);

  // Draw each connection
  connections.forEach((connection) => {
    if (connection.type === "tree") {
      drawTreeConnection(connection.trunk);
    } else {
      drawSingleConnection(connection);
    }
  });
}

function drawTreeConnection(trunk) {
  const fromEl = document.querySelector(`[data-section="${trunk.from}"]`);
  if (!fromEl) return;

  const containerRect = document
    .querySelector(".api-diagram-container")
    .getBoundingClientRect();
  const fromRect = fromEl.getBoundingClientRect();

  const branchElements = trunk.branches
    .map((branchId) => ({
      id: branchId,
      element: document.querySelector(`[data-section="${branchId}"]`),
    }))
    .filter((branch) => branch.element);

  const branchConnectionPoints = branchElements.map((branch) => {
    const rect = branch.element.getBoundingClientRect();
    return {
      y: rect.top + rect.height / 2 - containerRect.top,
      x: rect.left - containerRect.left,
    };
  });

  const minY = Math.min(...branchConnectionPoints.map((p) => p.y));
  const maxY = Math.max(...branchConnectionPoints.map((p) => p.y));

  // Get the first branch element to calculate center position
  const firstBranchRect = branchElements[0].element.getBoundingClientRect();

  const trunkStartX = fromRect.right - containerRect.left;
  // Calculate the midpoint between parent and child columns
  const trunkEndX = trunkStartX + (firstBranchRect.left - fromRect.right) / 2;

  const trunkY = fromRect.top - containerRect.top + fromRect.height / 2;
  const borderRadius = 30;

  // Create gradient for initial trunk only - this will be very light to dark
  const gradientId = `gradient-trunk-${trunk.from}`;
  const gradient = svg
    .append("defs")
    .append("linearGradient")
    .attr("id", gradientId)
    .attr("gradientUnits", "userSpaceOnUse")
    .attr("x1", trunkStartX)
    .attr("y1", "0")
    .attr("x2", trunkEndX)
    .attr("y2", "0");

  gradient
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "var(--api-gradient-start)");

  gradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "var(--api-gradient-end)");

  // Draw initial trunk with gradient
  svg
    .append("line")
    .attr("x1", trunkStartX)
    .attr("y1", trunkY)
    .attr("x2", trunkEndX)
    .attr("y2", trunkY)
    .attr("stroke", `url(#${gradientId})`)
    .attr("stroke-width", 5)
    .style("stroke-linecap", "round");

  // Draw vertical line in mid-blue
  if (branchElements.length > 1) {
    svg
      .append("line")
      .attr("x1", trunkEndX)
      .attr("y1", minY + borderRadius)
      .attr("x2", trunkEndX)
      .attr("y2", maxY - borderRadius)
      .attr("stroke", "var(--api-gradient-mid)") // Mid-blue color for vertical section
      .attr("stroke-width", 5)
      .style("stroke-linecap", "round");
  }

  // Draw branches with curved corners in dark blue
  branchElements.forEach((branch, index) => {
    const toRect = branch.element.getBoundingClientRect();
    const targetY = toRect.top - containerRect.top + toRect.height / 2;
    const endX = toRect.left - containerRect.left;

    const isFirst = index === 0;
    const isLast = index === branchElements.length - 1;

    if (isFirst && branchElements.length > 1) {
      const cornerPath = d3.path();
      cornerPath.moveTo(endX, targetY);
      cornerPath.lineTo(trunkEndX + borderRadius, targetY);
      cornerPath.quadraticCurveTo(
        trunkEndX,
        targetY,
        trunkEndX,
        targetY + borderRadius
      );

      svg
        .append("path")
        .attr("d", cornerPath)
        .attr("stroke", "var(--api-gradient-end)")
        .attr("stroke-width", 5)
        .attr("fill", "none")
        .style("stroke-linecap", "round");
    } else if (isLast && branchElements.length > 1) {
      const cornerPath = d3.path();
      cornerPath.moveTo(endX, targetY);
      cornerPath.lineTo(trunkEndX + borderRadius, targetY);
      cornerPath.quadraticCurveTo(
        trunkEndX,
        targetY,
        trunkEndX,
        targetY - borderRadius
      );

      svg
        .append("path")
        .attr("d", cornerPath)
        .attr("stroke", "var(--api-gradient-end)")
        .attr("stroke-width", 5)
        .attr("fill", "none")
        .style("stroke-linecap", "round");
    } else {
      svg
        .append("line")
        .attr("x1", endX)
        .attr("y1", targetY)
        .attr("x2", trunkEndX)
        .attr("y2", targetY)
        .attr("stroke", "var(--api-gradient-end)")
        .attr("stroke-width", 5)
        .style("stroke-linecap", "round");
    }
  });
}

function createGradient(id, isVertical, startPoint, endPoint) {
  const gradient = svg
    .append("defs")
    .append("linearGradient")
    .attr("id", id)
    .attr("gradientUnits", "userSpaceOnUse");

  if (isVertical) {
    // For vertical lines, gradient goes from top to bottom
    gradient
      .attr("x1", "0%")
      .attr("y1", startPoint)
      .attr("x2", "0%")
      .attr("y2", endPoint);
  } else {
    // For horizontal lines, gradient goes from left to right
    gradient
      .attr("x1", startPoint)
      .attr("y1", "0%")
      .attr("x2", endPoint)
      .attr("y2", "0%");
  }

  gradient
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "var(--api-gradient-start)");

  gradient
    .append("stop")
    .attr("offset", "15%")
    .attr("stop-color", "var(--api-gradient-end)");

  gradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "var(--api-gradient-end)");

  return gradient;
}

function drawSingleConnection(connection) {
  const fromEl = document.querySelector(`[data-section="${connection.from}"]`);
  const toEl = document.querySelector(`[data-section="${connection.to}"]`);
  if (!fromEl || !toEl) return;

  const containerRect = document
    .querySelector(".api-diagram-container")
    .getBoundingClientRect();
  const fromRect = fromEl.getBoundingClientRect();
  const toRect = toEl.getBoundingClientRect();

  // For vertical connection (Authorization to Sites)
  if (connection.from === "authorization" && connection.to === "sites") {
    const centerX = fromRect.left + fromRect.width / 2 - containerRect.left;

    // Create a specific gradient for this vertical line
    const gradientId = "vertical-line-gradient";
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", gradientId)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", "0")
      .attr("y1", fromRect.bottom - containerRect.top)
      .attr("x2", "0")
      .attr("y2", toRect.top - containerRect.top);

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "var(--api-gradient-start)");

    gradient
      .append("stop")
      .attr("offset", "85%")
      .attr("stop-color", "var(--api-gradient-end)");

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "var(--api-gradient-end)");

    // Draw the vertical line
    svg
      .append("line")
      .attr("x1", centerX)
      .attr("y1", fromRect.bottom - containerRect.top)
      .attr("x2", centerX)
      .attr("y2", toRect.top - containerRect.top)
      .attr("stroke", `url(#${gradientId})`)
      .attr("stroke-width", 5)
      .style("stroke-linecap", "round");
  } else {
    // For curved connections
    const startX = fromRect.right - containerRect.left;
    const endX = toRect.left - containerRect.left;
    const startY = fromRect.top - containerRect.top + fromRect.height / 2;
    const endY = toRect.top - containerRect.top + toRect.height / 2;

    const line = d3.line().curve(d3.curveBundle.beta(0.85));
    const points = [
      [startX, startY],
      [startX + 20, startY],
      [(startX + endX) / 2, startY],
      [(startX + endX) / 2, endY],
      [endX - 20, endY],
      [endX, endY],
    ];

    // Create a specific gradient for this curved line
    const gradientId = `gradient-${connection.from}-${connection.to}`;
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", gradientId)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", startX)
      .attr("y1", "0")
      .attr("x2", endX)
      .attr("y2", "0");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "var(--api-gradient-start)");

    gradient
      .append("stop")
      .attr("offset", "85%")
      .attr("stop-color", "var(--api-gradient-end)");

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "var(--api-gradient-end)");

    svg
      .append("path")
      .attr("d", line(points))
      .attr("stroke", `url(#${gradientId})`)
      .attr("stroke-width", 5)
      .attr("fill", "none")
      .style("stroke-linecap", "round");
  }
}

function initResizeObserver() {
  const resizeObserver = new ResizeObserver(
    debounce(() => {
      drawConnectors();
    }, 100)
  );

  const container = document.querySelector(".api-diagram-container");
  if (container) {
    resizeObserver.observe(container);
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function showModal(cardData) {
  const modalHtml = `
    <div class="api-modal-overlay">
      <div class="api-modal">
        <button class="api-modal-close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="api-modal-header">
          ${
            cardData.icon
              ? `<img src="${cardData.icon}" alt="" width="24" height="24">`
              : ""
          }
          <h2>${cardData.title}</h2>
        </div>
        <div class="api-modal-description">
          ${md.render(cardData.info.description)}
          ${
            cardData.docsLink
              ? `<a href="${cardData.docsLink}" target="_blank" class="api-modal-guide-button">Read Guide</a>`
              : ""
          }
        </div>
        ${renderCategories(cardData.info.categories)}
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);

  // Add event listeners
  const overlay = document.querySelector(".api-modal-overlay");
  const closeBtn = overlay.querySelector(".api-modal-close");
  const modal = overlay.querySelector(".api-modal");

  // Animate in
  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  // Close handlers
  closeBtn.onclick = () => closeModal(overlay);
  overlay.onclick = (e) => {
    if (e.target === overlay) closeModal(overlay);
  };

  // Handle endpoint clicks
  overlay
    .querySelectorAll(".api-endpoints-table tr[data-docs-link]")
    .forEach((row) => {
      row.onclick = () => window.open(row.dataset.docsLink, "_blank");
    });
}

function closeModal(overlay) {
  overlay.classList.remove("active");
  setTimeout(() => overlay.remove(), 300);
}

function renderCategories(categories) {
  if (!categories) return "";

  return categories
    .map(
      (category) => `
    <div class="api-endpoint-category">
      <h3>${category.name}</h3>
      <p>${md.render(category.description)}</p>
      <table class="api-endpoints-table">
        <thead>
          <tr>
            <th>Endpoint</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          ${renderEndpoints(category.endpoints)}
        </tbody>
      </table>
    </div>
  `
    )
    .join("");
}

function renderEndpoints(endpoints) {
  if (!endpoints) return "";

  return endpoints
    .map(
      (endpoint) => `
    <tr data-docs-link="${endpoint.docsLink}">
      <td>${endpoint.name}</td>
      <td>${md.render(endpoint.description)}</td>
    </tr>
  `
    )
    .join("");
}

export { initApiDiagram };
