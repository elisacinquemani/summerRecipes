var toggle = document.getElementsByClassName("toggleHeader");
var i;
for (i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
  });
}
