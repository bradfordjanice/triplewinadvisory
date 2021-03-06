// Design
const designicon = document.getElementById("designiconHotspot");
const designiconTabfocus = document.getElementById("designicon");
const designtooltip = document.getElementById("designtooltip");
let designTimeoutFunction;

designicon.addEventListener("mouseover", showDesignTooltip);
designicon.addEventListener("mouseout", stopDesignTooltip);
designiconTabfocus.addEventListener("focusin", showDesignTooltip);
designiconTabfocus.addEventListener("focusout", stopDesignTooltip);

function showDesignTooltip(event) {
  designTimeoutFunction = setTimeout(function () {
    designiconPos = designicon.getBoundingClientRect();
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
const packagingicon = document.getElementById("packagingiconHotspot");
const packagingiconTabfocus = document.getElementById("packagingicon");
const packagingtooltip = document.getElementById("packagingtooltip");
let packagingTimeoutFunction;

packagingicon.addEventListener("mouseover", showPackagingTooltip);
packagingicon.addEventListener("mouseout", stopPackagingTooltip);
packagingiconTabfocus.addEventListener("focusin", showPackagingTooltip);
packagingiconTabfocus.addEventListener("focusout", stopPackagingTooltip);

function showPackagingTooltip(event) {
  packagingTimeoutFunction = setTimeout(function () {
    packagingiconPos = packagingicon.getBoundingClientRect();
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
const manufactureicon = document.getElementById("manufactureiconHotspot");
const manufactureiconTabfocus = document.getElementById("manufactureicon");
const manufacturetooltip = document.getElementById("manufacturetooltip");
let manufactureTimeoutFunction;

manufactureicon.addEventListener("mouseover", showManufactureTooltip);
manufactureicon.addEventListener("mouseout", stopManufactureTooltip);
manufactureiconTabfocus.addEventListener("focusin", showManufactureTooltip);
manufactureiconTabfocus.addEventListener("focusout", stopManufactureTooltip);

function showManufactureTooltip(event) {
  manufactureTimeoutFunction = setTimeout(function () {
    manufactureiconPos = manufactureicon.getBoundingClientRect();
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
const warehouseicon = document.getElementById("warehouseiconHotspot");
const warehouseiconTabfocus = document.getElementById("warehouseicon");
const warehousetooltip = document.getElementById("warehousetooltip");
let warehouseTimeoutFunction;

warehouseicon.addEventListener("mouseover", showWarehouseTooltip);
warehouseicon.addEventListener("mouseout", stopWarehouseTooltip);
warehouseiconTabfocus.addEventListener("focusin", showWarehouseTooltip);
warehouseiconTabfocus.addEventListener("focusout", stopWarehouseTooltip);

function showWarehouseTooltip(event) {
  warehouseiconFunction = setTimeout(function () {
    warehouseiconPos = warehouseicon.getBoundingClientRect();
    warehousetooltip.style.left = warehouseiconPos.left - 310 + "px";
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
const headquartersicon = document.getElementById("headquartersiconHotspot");
const headquartersTabfocus = document.getElementById("headquartersicon");
const headquarterstooltipL = document.getElementById("headquarterstooltipL");
const headquarterstooltipR = document.getElementById("headquarterstooltipR");
let headquartersTimeoutFunction;

headquartersicon.addEventListener("mouseover", showHeadquartersTooltip);
headquartersicon.addEventListener("mouseout", stopHeadquartersTooltip);
headquartersTabfocus.addEventListener("focusin", showHeadquartersTooltip);
headquartersTabfocus.addEventListener("focusout", stopHeadquartersTooltip);

function showHeadquartersTooltip(event) {
  headquartersTimeoutFunction = setTimeout(function () {
    headquartersiconPos = headquartersicon.getBoundingClientRect();
    headquarterstooltipR.style.left = headquartersiconPos.right + 19 + "px";
    headquarterstooltipR.style.top =
      window.scrollY + headquartersiconPos.top - 175 + "px";
    headquarterstooltipR.style.display = "block";
    headquarterstooltipL.style.left = headquartersiconPos.left - 280 + "px";
    headquarterstooltipL.style.top =
      window.scrollY + headquartersiconPos.top - 175 + "px";
    headquarterstooltipL.style.display = "block";
  }, 500);
}

function stopHeadquartersTooltip(event) {
  clearTimeout(headquartersTimeoutFunction);
  headquarterstooltipR.style.display = "none";
  headquarterstooltipL.style.display = "none";
}

// Plane1
const plane1icon = document.getElementById("plane1iconHotspot");
const plane1iconTabfocus = document.getElementById("plane1iconPulse");
const plane1tooltip = document.getElementById("plane1tooltip");
let plane1TimeoutFunction;

plane1icon.addEventListener("mouseover", showPlane1Tooltip);
plane1icon.addEventListener("mouseout", stopPlane1Tooltip);
plane1iconTabfocus.addEventListener("focusin", showPlane1Tooltip);
plane1iconTabfocus.addEventListener("focusout", stopPlane1Tooltip);

function showPlane1Tooltip(event) {
  plane1TimeoutFunction = setTimeout(function () {
    plane1iconPos = plane1icon.getBoundingClientRect();
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
const plane2icon = document.getElementById("plane2iconHotspot");
const plane2iconTabfocus = document.getElementById("plane2iconPulse");
const plane2tooltip = document.getElementById("plane2tooltip");
let plane2TimeoutFunction;

plane2icon.addEventListener("mouseover", showPlane2Tooltip);
plane2icon.addEventListener("mouseout", stopPlane2Tooltip);
plane2iconTabfocus.addEventListener("focusin", showPlane2Tooltip);
plane2iconTabfocus.addEventListener("focusout", stopPlane2Tooltip);

function showPlane2Tooltip(event) {
  plane2TimeoutFunction = setTimeout(function () {
    plane2iconPos = plane2icon.getBoundingClientRect();
    plane2tooltip.style.left = plane2iconPos.right + 10 + "px";
    plane2tooltip.style.top = window.scrollY + plane2iconPos.top - 255 + "px";
    plane2tooltip.style.display = "block";
  }, 500);
}

function stopPlane2Tooltip(event) {
  clearTimeout(plane2TimeoutFunction);
  plane2tooltip.style.display = "none";
}

// Truck
const truckicon = document.getElementById("truckiconHotspot");
const truckTabfocus = document.getElementById("truckiconPulse");
const trucktooltip = document.getElementById("trucktooltip");
let truckTimeoutFunction;

truckicon.addEventListener("mouseover", showtruckTooltip);
truckicon.addEventListener("mouseout", stoptruckTooltip);
truckTabfocus.addEventListener("focusin", showtruckTooltip);
truckTabfocus.addEventListener("focusout", stoptruckTooltip);

function showtruckTooltip(event) {
  truckTimeoutFunction = setTimeout(function () {
    truckiconPos = truckicon.getBoundingClientRect();
    trucktooltip.style.left = truckiconPos.left - 250 + "px";
    trucktooltip.style.top = window.scrollY + truckiconPos.top - 30 + "px";
    trucktooltip.style.display = "block";
  }, 500);
}

function stoptruckTooltip(event) {
  clearTimeout(truckTimeoutFunction);
  trucktooltip.style.display = "none";
}
