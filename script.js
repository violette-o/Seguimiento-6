let lista = document.querySelector(".list");

for (let i = 1; i < 827; i++){
    let title = `character ${i}`
    let mensaje = `Esta es la publicación número ${i}. Esto es una prueba de generación de rellenopor medio de funciones y ciclos.`
    let imageUrl = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`
    let div = createPost(title,Message,imageUrl)
    lista.append(div)
}

function createPost(name,message,imageUrl){
  let div = document.createElement("div")
  div.className = "character"
  let imagen = document.createElement("img")
  imagen.setAttribute("src",imageUrl )
  imagen.className = "image"
  div.appendChild(imagen)
  let character_name = document.createElement("h1")
  character_name. textContent = name
  div.appendChild(character_name)
  let description = document.createElement("p")
  description_textContent = message
  div.appendChild(description)
  return div



}