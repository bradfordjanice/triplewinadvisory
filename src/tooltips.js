// console.log("Hello Project.");

// Design
let designicon = document.getElementById("designicon");
let designtooltip = document.getElementById("designtooltip");

designicon.addEventListener("mouseover", showDesignTooltip);
designicon.addEventListener("mouseout", hideDesignTooltip);

function showDesignTooltip(event) {
  let designiconPos = designicon.getBoundingClientRect();
  designtooltip.style.left = designiconPos.right + 10 + "px";
  designtooltip.style.top = window.scrollY + designiconPos.top - 30 + "px";
  designtooltip.style.display = "block";
}

function hideDesignTooltip(event) {
  designtooltip.style.display = "none";
}

// Packaging
let packagingicon = document.getElementById("packagingicon");
let packagingtooltip = document.getElementById("packagingtooltip");

packagingicon.addEventListener("mouseover", showPackagingTooltip);
packagingicon.addEventListener("mouseout", hidePackagingTooltip);

function showPackagingTooltip(event) {
  let packagingiconPos = packagingicon.getBoundingClientRect();
  packagingtooltip.style.left = packagingiconPos.right + 10 + "px";
  packagingtooltip.style.top =
    window.scrollY + packagingiconPos.top - 30 + "px";
  packagingtooltip.style.display = "block";
}

function hidePackagingTooltip(event) {
  packagingtooltip.style.display = "none";
}

// Manufacture

// Warehouse

// Headquarters
