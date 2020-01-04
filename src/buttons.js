console.log("buttons.js file");

const efficiencybtn = document.getElementById("efficiencybtn");
const efficiencybtnOutline = document.getElementById("efficiencybtnOutline");

efficiencybtn.addEventListener = ("mouseover", showEfficiencybtnOutline);
efficiencybtn.addEventListener = ("mouseout", hideEfficiencybtnOutline);
efficiencybtn.addEventListener = ("click", loadEfficienciesGraph);

function showEfficiencybtnOutline(event) {
  console.log("mouseover Efficiencies button.");
  efficiencybtnOutline.style.opacity = "100%";
}

function hideEfficiencybtnOutline(event) {
  console.log("mouseout Efficiencies button.");
  efficiencybtnOutline.style.opacity = "0%";
}

function loadEfficienciesGraph(event) {
  /*
  Unload the current graph.  Use groupname.style.display = "none"?
  Load the Efficiencies Graph. Use efficienciesGroup.style.display = "block"?
  Set the variable that tracks which graph you're on to Efficiencies.
  Set the Efficiencies button outline to 100% opacity.
  While on the Efficiencies graph, mouseout has no effect.
  */
  console.log("Load Efficiencies Graph now.");
  efficiencybtnOutline.style.opacity = "100%";
}
