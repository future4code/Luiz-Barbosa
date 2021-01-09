import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import huguinhoPerfil from './img/huguinho.png'
import huguinhoFoto from './img/huguinho-foto.png'
import luisinho from './img/Luisinho.png'
import zezinhoPerfil from './img/zezinhoPerfil.png'

class App extends React.Component {
  state = {
  postagens:
  [
    
    {
      nomeUsuario: "Huguinho",
      fotoUsuario: huguinhoPerfil,
      fotoPost: huguinhoFoto
    },
    {
      nomeUsuario: "Luizinho",
      fotoUsuario: luisinho,
      fotoPost: luisinho
    },
    {
      nomeUsuario: "Zezinho",
      fotoUsuario: zezinhoPerfil,
      fotoPost: zezinhoPerfil
    }
  ]
};
  render() {
    const listaDeComponentes = this.state.postagens.map((post) => {
      return (
        <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <div className={"app-container"}>
        {listaDeComponentes}
      </div>
    );
  }
}

export default App;
