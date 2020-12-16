let postsCriados = []



const criarPost = () => {
    let tituloPost = document.getElementById("titulo-post").value
    let autorPost = document.getElementById("autor-post").value
    let conteudoPost = document.getElementById("conteudo-post").value

    const infoUsuario = {
    titulo: tituloPost,
    autor: autorPost,
    conteudo: conteudoPost
}
    
    postsCriados.push(infoUsuario)


    let primeiroInput = document.getElementById("titulo-post")
    let segundoInput = document.getElementById("autor-post")
    let terceiroInput = document.getElementById("conteudo-post")
    
    primeiroInput.value = ""
    segundoInput.value = ""
    terceiroInput.value = ""

    console.log(postsCriados)

    
}


const postagemFeita = () => {
    let sectionPost = document.getElementById("container-de-posts")
    sectionPost.innerHTML = infoUsuario.titulo
}

// não sei porquê ele imprime undefined na section AAAA