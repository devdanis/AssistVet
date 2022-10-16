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


//   function prod() {
//     var x = document.getElementById("nav__prod");
//     console.log(x);
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     }
//     else {
//       x.style.display = "block";
//       x.style.position = "absolute";
//     }
//   }

const btnProductos = document.getElementById('productos');
const menuProductos = document.getElementById('nav__prod');
const btnServicios = document.getElementById('servicios');
const tocarBody = document.getElementsByTagName ("body")[0];


btnProductos.addEventListener ('mouseover', () => {
    menuProductos.style.display = "block";
    menuProductos.style.position = "absolute";
});

menuProductos.addEventListener ('mouseleave', () => {
    menuProductos.style.display = "none";
});

btnServicios.addEventListener ('mouseover', () => {
    menuProductos.style.display = "none";
    // menuProductos.style.position = "absolute";
});

tocarBody.addEventListener ("click", () => {
    menuProductos.style.display = "none";
});
