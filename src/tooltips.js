// console.log("Hello Project.");

// Design
let designicon = document.getElementById("designiconHotspot");
let designtooltip = document.getElementById("designtooltip");
let designTimeoutFunction;

designicon.addEventListener("mouseover", showDesignTooltip);
designicon.addEventListener("mouseout", stopDesignTooltip);

function showDesignTooltip(event) {
  designTimeoutFunction = setTimeout(function() {
    let designiconPos = designicon.getBoundingClientRect();
    designtooltip.style.left = designiconPos.right + 10 + "px";
    designtooltip.style.top = window.scrollY + designiconPos.top - 30 + "px";
    designtooltip.style.display = "block";
  }, 500);
}

function stopDesignTooltip(event) {
  /* stops the popup from appearing before time interval completes */
  clearTimeout(designTimeoutFunction);
  /* hides popup on mouseout */
  designtooltip.style.display = "none";
}

// Packaging
let packagingicon = document.getElementById("packagingiconHotspot");
let packagingtooltip = document.getElementById("packagingtooltip");
let packagingTimeoutFunction;

packagingicon.addEventListener("mouseover", showPackagingTooltip);
packagingicon.addEventListener("mouseout", stopPackagingTooltip);

function showPackagingTooltip(event) {
  packagingTimeoutFunction = setTimeout(function() {
    let packagingiconPos = packagingicon.getBoundingClientRect();
    packagingtooltip.style.left = packagingiconPos.right + 10 + "px";
    packagingtooltip.style.top =
      window.scrollY + packagingiconPos.top - 30 + "px";
    packagingtooltip.style.display = "block";
  }, 500);
}

function stopPackagingTooltip(event) {
  clearTimeout(packagingTimeoutFunction);
  packagingtooltip.style.display = "none";
}

// Manufacture
let manufactureicon = document.getElementById("manufactureiconHotspot");
let manufacturetooltip = document.getElementById("manufacturetooltip");
let manufactureTimeoutFunction;

manufactureicon.addEventListener("mouseover", showManufactureTooltip);
manufactureicon.addEventListener("mouseout", stopManufactureTooltip);

function showManufactureTooltip(event) {
  manufactureTimeoutFunction = setTimeout(function() {
    let manufactureiconPos = manufactureicon.getBoundingClientRect();
    manufacturetooltip.style.left = manufactureiconPos.right + 10 + "px";
    manufacturetooltip.style.top =
      window.scrollY + manufactureiconPos.top - 30 + "px";
    manufacturetooltip.style.display = "block";
  }, 500);
}

function stopManufactureTooltip(event) {
  clearTimeout(manufactureTimeoutFunction);
  manufacturetooltip.style.display = "none";
}

// Warehouse
let warehouseicon = document.getElementById("warehouseiconHotspot");
let warehousetooltip = document.getElementById("warehousetooltip");
let warehouseTimeoutFunction;

warehouseicon.addEventListener("mouseover", showWarehouseTooltip);
warehouseicon.addEventListener("mouseout", stopWarehouseTooltip);

function showWarehouseTooltip(event) {
  warehouseiconFunction = setTimeout(function() {
    let warehouseiconPos = warehouseicon.getBoundingClientRect();
    warehousetooltip.style.left = warehouseiconPos.right + 10 + "px";
    warehousetooltip.style.top =
      window.scrollY + warehouseiconPos.top - 30 + "px";
    warehousetooltip.style.display = "block";
  }, 500);
}

function stopWarehouseTooltip(event) {
  clearTimeout(warehouseiconFunction);
  warehousetooltip.style.display = "none";
}

// Headquarters
let headquartersicon = document.getElementById("headquartersiconHotspot");
let headquarterstooltipL = document.getElementById("headquarterstooltipL");
let headquarterstooltipR = document.getElementById("headquarterstooltipR");
let headquartersTimeoutFunction;

headquartersicon.addEventListener("mouseover", showHeadquartersTooltip);
headquartersicon.addEventListener("mouseout", stopHeadquartersTooltip);

function showHeadquartersTooltip(event) {
  headquartersTimeoutFunction = setTimeout(function() {
    let headquartersiconPos = headquartersicon.getBoundingClientRect();
    headquarterstooltipR.style.left = headquartersiconPos.right + 13 + "px";
    headquarterstooltipR.style.top =
      window.scrollY + headquartersiconPos.top - 100 + "px";
    headquarterstooltipR.style.display = "block";
    headquarterstooltipL.style.left = headquartersiconPos.right - 330 + "px";
    headquarterstooltipL.style.top =
      window.scrollY + headquartersiconPos.top - 115 + "px";
    headquarterstooltipL.style.display = "block";
  }, 500);
}

function stopHeadquartersTooltip(event) {
  clearTimeout(headquartersTimeoutFunction);
  headquarterstooltipR.style.display = "none";
  headquarterstooltipL.style.display = "none";
}

// Plane1
let plane1icon = document.getElementById("plane1iconHotspot");
let plane1tooltip = document.getElementById("plane1tooltip");
let plane1TimeoutFunction;

plane1icon.addEventListener("mouseover", showPlane1Tooltip);
plane1icon.addEventListener("mouseout", stopPlane1Tooltip);

function showPlane1Tooltip(event) {
  plane1TimeoutFunction = setTimeout(function() {
    let plane1iconPos = plane1icon.getBoundingClientRect();
    plane1tooltip.style.left = plane1iconPos.right + 10 + "px";
    plane1tooltip.style.top = window.scrollY + plane1iconPos.top - 30 + "px";
    plane1tooltip.style.display = "block";
  }, 500);
}

function stopPlane1Tooltip(event) {
  clearTimeout(plane1TimeoutFunction);
  plane1tooltip.style.display = "none";
}

// Plane2
let plane2icon = document.getElementById("plane2iconHotspot");
let plane2tooltip = document.getElementById("plane2tooltip");
let plane2TimeoutFunction;

plane2icon.addEventListener("mouseover", showPlane2Tooltip);
plane2icon.addEventListener("mouseout", stopPlane2Tooltip);

function showPlane2Tooltip(event) {
  plane2TimeoutFunction = setTimeout(function() {
    let plane2iconPos = plane2icon.getBoundingClientRect();
    plane2tooltip.style.left = plane2iconPos.right + 10 + "px";
    plane2tooltip.style.top = window.scrollY + plane2iconPos.top - 255 + "px";
    plane2tooltip.style.display = "block";
  }, 500);
}

function stopPlane2Tooltip(event) {
  clearTimeout(plane2TimeoutFunction);
  plane2tooltip.style.display = "none";
}
