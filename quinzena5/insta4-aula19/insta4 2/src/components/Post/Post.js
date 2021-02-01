import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import salvarBranco from '../../img/bookmark_border-24px.svg'
import salvarPreto from '../../img/bookmark-24px.svg'
import iconeCompartilhar from '../../img/share-24px.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1,
      curtido: !this.state.curtido      
    })
    if (this.state.numeroCurtidas > 0) {
      const novoEstado = {
        numeroCurtidas: this.state.numeroCurtidas -1
      }
      this.setState(novoEstado)
    }
  }


//BOTAO SALVAR
  onClickSalvar = () => {
    this.setState({
      salvo: true,    
      salvo: !this.state.salvo 
    })
    
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando //o que
    })

  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

    onClickCompartilhar = () => {
      this.setState({
        compartilhando: true
      })
      console.log("funfoi")
    }
  
  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeSalvar

    if(this.state.salvo) {
      iconeSalvar = salvarPreto
    } else {
      iconeSalvar = salvarBranco
    }

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = console.log("funfou")
      
    }
    console.log(this.props)

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

       <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
        icone={iconeSalvar}
        onClickIcone={this.onClickSalvar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
        icone={iconeCompartilhar}
        onClickCompartilha = {this.onClickCompartilhar}
        />

      </div>
      {componenteComentario}
    </div>
  }
}

export default Post