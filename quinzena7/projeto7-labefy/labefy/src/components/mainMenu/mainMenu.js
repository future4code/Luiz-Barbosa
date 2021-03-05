import React from 'react'
import {ProfilePic, ItemLista, MenuDiv, Icon, NomeEmail} from './mainMenuStyle'
import Home from '../../assets/homepage.svg'
import Playlists from '../../assets/playlist.svg'
import AdicionarPlaylist from '../../assets/adicionar-a-playlist.svg'
import Youtube from '../../assets/youtube.svg'


const MainMenu = (props) => {
    return (
      <div>
        <div>
            <ProfilePic src={'https://i.pinimg.com/736x/ad/8e/04/ad8e046bbc7780c544bf1a23056de5d1.jpg'}/>
            <NomeEmail>Luiz Fernando Barbosa</NomeEmail>
            <NomeEmail>l.fernandobarbosa@hotmail.com</NomeEmail>
            <MenuDiv>
            <ItemLista onClick={props.mudaPagina}> <Icon src={Home}/>Home</ItemLista>
            <ItemLista onClick={props.mudaPraSegundaPagina}> <Icon src={Playlists}/>Playlists</ItemLista>
            <ItemLista onClick={props.mudaPraTerceiraPagina}> <Icon src={AdicionarPlaylist}/>Criar uma Playlist</ItemLista>
            <ItemLista> <Icon src={Youtube}/>Ir pro Youtube</ItemLista>
            </MenuDiv>
        </div>
      </div>
    )
  }

  export default MainMenu;