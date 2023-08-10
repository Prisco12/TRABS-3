// ADCIONANDO IMAGENS

function ocultaForm(dados){
    console.log('teste')
    const container = document.getElementById('teste')

    const image = document.createElement("img");
    image.src = dados
    image.classList.add("quadrado")
    image.draggable = false
    container.appendChild(image)
    
  

  }

  

