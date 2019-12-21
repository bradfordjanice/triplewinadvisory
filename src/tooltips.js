console.log("Hello Project.");

let designicon = document.getElementById("designicon");
let designtooltip = document.getElementById("designtooltip");

designicon.addEventListener("mouseover", showTooltip);
designicon.addEventListener("mouseout", hideTooltip);

function showTooltip(event) {
  let designiconPos = designicon.getBoundingClientRect();
  designtooltip.style.left = designiconPos.right + 20 + "px";
  designtooltip.style.top = window.scrollY + designiconPos - 60 + "px";
  designtooltip.style.display = "block";
}

function hideTooltip(event) {
  designtooltip.style.display = "none";
}
