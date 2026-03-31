let linksList = document.getElementById("linksList");
let bars = document.getElementById("bars");

linksList.style.maxHeight = "0px";
function toggleMenu() {
  if (linksList.style.maxHeight === "0px") {
    linksList.style.maxHeight = "400px";
  } else {
    linksList.style.maxHeight = "0px";
  }
}
bars.addEventListener("click", toggleMenu);


function changetoggle() {
  if (linksList.style.maxHeight === "400px") {
    bars.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    bars.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
}
bars.addEventListener("click", changetoggle);
