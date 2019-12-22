// console.log("Hello Project.");

// Design
let designicon = document.getElementById("designicon");
let designtooltip = document.getElementById("designtooltip");

designicon.addEventListener("mouseover", showTooltip);
designicon.addEventListener("mouseout", hideTooltip);

function showTooltip(event) {
  let designiconPos = designicon.getBoundingClientRect();
  designtooltip.style.left = designiconPos.right + 10 + "px";
  designtooltip.style.top = window.scrollY + designiconPos.top - 30 + "px";
  designtooltip.style.display = "block";
}

function hideTooltip(event) {
  designtooltip.style.display = "none";
}

// Packaging
let packagingicon = document.getElementById("packagingicon");
let packagingtooltip = document.getElementById("packagingtooltip");

// Manufacture

// Warehouse

// Headquarters
