const URL_API = "https://fakestoreapi.com/products";

function obtenerDatos() {
  fetch(URL_API)
    .then((response) => response.json())
    .then((data) => {
      const contador = document.getElementById("contador-actual");
      contador.innerText = data[0].title;
      const imagen = document.getElementById("img");
      imagen.src = data[0].image;
      const preci = document.getElementById("precio");
      preci.innerText = data[0].price;
      const cate = document.getElementById("category");
      cate.innerText = data[0].category;
      const des = document.getElementById("descripcion");
      des.innerText = data[0].description;
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
      document.getElementById("contador-actual").innerText = "Error";
    });
}

obtenerDatos();

// function obtenerImagen() {
//   fetch(URL_API)
//     .then((response) => response.json())
//     .then((data) => {
//       const imagen = document.getElementById("img");
//       imagen.src = data[0].image;
//     })
//     .catch((error) => {
//       console.error("Error al obtener los datos:", error);
//       document.getElementById("img").innerHTML = "Error";
//     });
// }

// window.onload = obtenerImagen;

function obtenerDatos2() {
  fetch(URL_API)
    .then((response) => response.json())
    .then((data) => {
      const titu = document.getElementById("titulo2");
      titu.innerText = data[1].title;
      const imagen2 = document.getElementById("imge2");
      imagen2.src = data[1].image;
      const preci = document.getElementById("precio2");
      preci.innerText = data[1].price;
      const cate = document.getElementById("category2");
      cate.innerText = data[1].category;
      const des = document.getElementById("descripcion2");
      des.innerText = data[1].description;
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
      document.getElementById("titulo").innerText = "Error";
    });
}

obtenerDatos2();
