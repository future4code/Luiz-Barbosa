import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import huguinhoPerfil from './img/huguinho.png'
import huguinhoFoto from './img/huguinho-foto.png'
import luisinho from './img/Luisinho.png'
import zezinhoPerfil from './img/zezinhoPerfil.png'
import styled from 'styled-components'

const TituloEstilizado = styled.h3`
color: blue;
padding-right: 10px;
`
const DivInputs = styled.div `
  display: flex;
  width: 100vw;
  background-color: tomato;
  border: 1px solid black;
  margin-bottom: 5px;
  place-content: center;
  place-items: center;
`
const BotaoAdd = styled.button `
background-color: #cccccc;
border: 1px solid black;
`


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
    },
    {
      nomeUsuario: this.state.postagens.NovoNomeUsuario,
      fotoUsuario: this.state.postagens.NovoFotoUsuario,
      fotoPost: this.state.postagens.fotoPost
    }
  ],
  NovoNomeUsuario: "",
  NovoFotoUsuario: "",
  NovoFotoPost: ""
};

onChangeInputNome = (event) => {
  this.setState({NovoNomeUsuario: event.target.value })
}
onChangeInputPerfil = (event) => {
  this.setState({NovoFotoUsuario: event.target.value })
}
onChangeInputFoto = (event) => {
  this.setState({NovoFotoPost: event.target.value })
}

onClickPostar = () => {
  console.log()
  const novaPostagem = {
    NovoNomeUsuario: this.state.NovoNomeUsuario,
    NovoFotoUsuario: this.state.NovoFotoUsuario,
    NovoFotoPost: this.state.NovoFotoPost
  };

  const postagem = [...this.state.postagens, novaPostagem];

  this.setState({ postagens: postagem });
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
      <div>
        <DivInputs>
        <TituloEstilizado>Novo Post</TituloEstilizado>
        <form>
        <input value={this.state.NovoNomeUsuario} onChange={this.onChangeInputNome} placeholder={"Nome"}/>
        <input value={this.state.NovoFotoUsuario} onChange={this.onChangeInputPerfil} placeholder={"Foto de Perfil"}/>
        <input value={this.state.NovoFotoPost} onChange={this.onChangeInputFoto} placeholder={"Foto do Post"}/>
        </form>
        <BotaoAdd onClick={this.onClickPostar}>Postar</BotaoAdd>
        </DivInputs>
      <div className={"app-container"}>
        {listaDeComponentes}
      </div>
      </div>
    );
  }
}

export default App;
