function menu() {
    var x = document.getElementById("nav__menu");
    console.log(x);
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
      x.style.position = "absolute";
    }
  }