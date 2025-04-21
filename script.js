let lista = document.querySelector(".list");

for (let i = 1; i < 827; i++){
    let title = `character ${i}`
    let mensaje = `Esta es la publicación número ${i}. Esto es una prueba de generación de rellenopor medio de funciones y ciclos.`
    let imageUrl 
}

const botones = document.querySelectorAll("button");

for (const boton of botones) {
  boton.addEventListener("click", function (e) {
    elemento = e.target.parentElement;
    elemento.remove();
  });
}