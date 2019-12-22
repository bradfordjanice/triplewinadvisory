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
let manufactureicon = document.getElementById("manufactureicon");
let manufacturetooltip = document.getElementById("manufacturetooltip");

manufactureicon.addEventListener("mouseover", showManufactureTooltip);
manufactureicon.addEventListener("mouseout", hideManufactureTooltip);

function showManufactureTooltip(event) {
  let manufactureiconPos = manufactureicon.getBoundingClientRect();
  manufacturetooltip.style.left = manufactureiconPos.right + 10 + "px";
  manufacturetooltip.style.top =
    window.scrollY + manufactureiconPos.top - 30 + "px";
  manufacturetooltip.style.display = "block";
}

function hideManufactureTooltip(event) {
  manufacturetooltip.style.display = "none";
}

// Warehouse
let warehouseicon = document.getElementById("warehouseicon");
let warehousetooltip = document.getElementById("warehousetooltip");

warehouseicon.addEventListener("mouseover", showWarehouseTooltip);
warehouseicon.addEventListener("mouseout", hideWarehouseTooltip);

function showWarehouseTooltip(event) {
  let warehouseiconPos = warehouseicon.getBoundingClientRect();
  warehousetooltip.style.left = warehouseiconPos.right + 10 + "px";
  warehousetooltip.style.top =
    window.scrollY + warehouseiconPos.top - 30 + "px";
  warehousetooltip.style.display = "block";
}

function hideWarehouseTooltip(event) {
  warehousetooltip.style.display = "none";
}

// Headquarters
let headquartersicon = document.getElementById("headquartersicon");
let headquarterstooltip = document.getElementById("headquarterstooltip");

headquartersicon.addEventListener("mouseover", showHeadquartersTooltip);
headquartersicon.addEventListener("mouseout", hideHeadquartersTooltip);

function showHeadquartersTooltip(event) {
  let headquartersiconPos = headquartersicon.getBoundingClientRect();
  headquarterstooltip.style.left = headquartersiconPos.right + 10 + "px";
  headquarterstooltip.style.top =
    window.scrollY + headquartersiconPos.top - 30 + "px";
  headquarterstooltip.style.display = "block";
}

function hideHeadquartersTooltip(event) {
  headquarterstooltip.style.display = "none";
}

// Plane1
let plane1icon = document.getElementById("plane1icon");
let plane1tooltip = document.getElementById("plane1tooltip");

plane1icon.addEventListener("mouseover", showPlane1Tooltip);
plane1icon.addEventListener("mouseout", hidePlane1Tooltip);

function showPlane1Tooltip(event) {
  let plane1iconPos = plane1icon.getBoundingClientRect();
  plane1icon.style.left = plane1iconPos.right + 10 + "px";
  plane1tooltip.style.top = window.scrollY + plane1iconPos.top - 30 + "px";
  plane1tooltip.style.display = "block";
}

function hidePlane1Tooltip(event) {
  plane1tooltip.style.display = "none";
}
