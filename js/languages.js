function openLanguages() {
  document.getElementById("languages").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".langbtn")) {
    var langs = document.getElementsByClassName("languages");
    var i;
    for (i = 0; i < langs.length; i++) {
      var openlang = langs[i];
      if (openlang.classList.contains("show")) {
        openlang.classList.remove("show");
      }
    }
  }
};
