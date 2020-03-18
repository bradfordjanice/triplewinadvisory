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
  designTimeoutFunction = setTimeout(function() {
    designiconPos = designicon.getBoundingClientRect();
    designtooltip.style.left = designiconPos.right + 10 + "px";
    designtooltip.style.top = window.scrollY + designiconPos.top - 30 + "px";
    designtooltip.style.display = "block";
  }, 500);
}

function stopDesignTooltip(event) {
  /* stops the popup from appearing before time interval completes */
  clearTimeout(designTimeoutFunction);
  /* hides popup on mouseout or losing focus */
  designtooltip.style.display = "none";
}

// Source Raw Materials
const materialsicon = document.getElementById("materialsiconHotspot");
const materialsiconTabfocus = document.getElementById("materialsicon");
const materialstooltip = document.getElementById("materialstooltip");
let materialsTimeoutFunction;

materialsicon.addEventListener("mouseover", showMaterialsTooltip);
materialsicon.addEventListener("mouseout", stopMaterialsTooltip);
materialsiconTabfocus.addEventListener("focusin", showMaterialsTooltip);
materialsiconTabfocus.addEventListener("focusout", stopMaterialsTooltip);

function showMaterialsTooltip(event) {
  materialsTimeoutFunction = setTimeout(function() {
    materialsiconPos = materialsicon.getBoundingClientRect();
    materialstooltip.style.left = materialsiconPos.right + 10 + "px";
    materialstooltip.style.top =
      window.scrollY + materialsiconPos.top - 30 + "px";
    materialstooltip.style.display = "block";
  }, 500);
}

function stopMaterialsTooltip(event) {
  /* stops the popup from appearing before time interval completes */
  clearTimeout(materialsTimeoutFunction);
  /* hides popup on mouseout */
  materialstooltip.style.display = "none";
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
  packagingTimeoutFunction = setTimeout(function() {
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
  manufactureTimeoutFunction = setTimeout(function() {
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

// Refurbish Product
const refurbishicon = document.getElementById("refurbishiconHotspot");
const refurbishiconTabfocus = document.getElementById("refurbishicon");
const refurbishtooltip = document.getElementById("refurbishtooltip");
let refurbishTimeoutFunction;

refurbishicon.addEventListener("mouseover", showrefurbishTooltip);
refurbishicon.addEventListener("mouseout", stoprefurbishTooltip);
refurbishiconTabfocus.addEventListener("focusin", showrefurbishTooltip);
refurbishiconTabfocus.addEventListener("focusout", stoprefurbishTooltip);

function showrefurbishTooltip(event) {
  refurbishTimeoutFunction = setTimeout(function() {
    refurbishiconPos = refurbishicon.getBoundingClientRect();
    refurbishtooltip.style.left = refurbishiconPos.right + 10 + "px";
    refurbishtooltip.style.top =
      window.scrollY + refurbishiconPos.top - 30 + "px";
    refurbishtooltip.style.display = "block";
  }, 500);
}

function stoprefurbishTooltip(event) {
  clearTimeout(refurbishTimeoutFunction);
  refurbishtooltip.style.display = "none";
}

// Upcycle
const upcycleicon = document.getElementById("upcycleiconHotspot");
const upcycleiconTabfocus = document.getElementById("upcycleicon");
const upcycletooltip = document.getElementById("upcycletooltip");
let upcycleTimeoutFunction;

upcycleicon.addEventListener("mouseover", showupcycleTooltip);
upcycleicon.addEventListener("mouseout", stopupcycleTooltip);
upcycleiconTabfocus.addEventListener("focusin", showupcycleTooltip);
upcycleiconTabfocus.addEventListener("focusout", stopupcycleTooltip);

function showupcycleTooltip(event) {
  upcycleTimeoutFunction = setTimeout(function() {
    upcycleiconPos = upcycleicon.getBoundingClientRect();
    upcycletooltip.style.left = upcycleiconPos.right + 10 + "px";
    upcycletooltip.style.top = window.scrollY + upcycleiconPos.top - 30 + "px";
    upcycletooltip.style.display = "block";
  }, 500);
}

function stopupcycleTooltip(event) {
  clearTimeout(upcycleTimeoutFunction);
  upcycletooltip.style.display = "none";
}

// Downcycle
const downcycleicon = document.getElementById("downcycleiconHotspot");
const downcycleiconTabfocus = document.getElementById("downcycleicon");
const downcycletooltip = document.getElementById("downcycletooltip");
let downcycleTimeoutFunction;

downcycleicon.addEventListener("mouseover", showdowncycleTooltip);
downcycleicon.addEventListener("mouseout", stopdowncycleTooltip);
downcycleiconTabfocus.addEventListener("focusin", showdowncycleTooltip);
downcycleiconTabfocus.addEventListener("focusout", stopdowncycleTooltip);

function showdowncycleTooltip(event) {
  downcycleTimeoutFunction = setTimeout(function() {
    downcycleiconPos = downcycleicon.getBoundingClientRect();
    downcycletooltip.style.left = downcycleiconPos.right + 10 + "px";
    downcycletooltip.style.top =
      window.scrollY + downcycleiconPos.top - 30 + "px";
    downcycletooltip.style.display = "block";
  }, 500);
}

function stopdowncycleTooltip(event) {
  clearTimeout(downcycleTimeoutFunction);
  downcycletooltip.style.display = "none";
}
