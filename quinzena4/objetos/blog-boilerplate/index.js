const criarPost = () => {
    const infoUsuario = {
        titulo: document.getElementById('titulo-post').value,
        autor: document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value,
        imagem: document.getElementById('imagem-post').value
    }

   
    document.getElementById('container-de-posts').innerHTML += 
   `<div class="cardPost">
    <p><strong> Título: </strong>${infoUsuario.titulo}<p>
    <p><strong> Autor: </strong>${infoUsuario.autor}<p>
    <p><strong> Conteúdo: </strong>${infoUsuario.conteudo}<p>
    <img src=${infoUsuario.imagem} class="imagem"/>
    </div>
    
    `
}
    
