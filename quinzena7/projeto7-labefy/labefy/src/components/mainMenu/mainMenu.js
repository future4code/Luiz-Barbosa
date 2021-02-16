import React from 'react'
import {ProfilePic, ItemLista, MenuDiv} from './mainMenuStyle'

export class MainMenu extends React.Component {
    render() {
        return <div>
            <ProfilePic src={'https://picsum.photos/id/237/536/354'}/>
            <p>Luiz Fernando Barbosa</p>
            <p>l.fernandobarbosa@hotmail.com</p>
            <MenuDiv>
            <ItemLista>Home</ItemLista>
            <ItemLista>Playlists</ItemLista>
            <ItemLista>Criar uma Playlist</ItemLista>
            <ItemLista>Ir pro Youtube</ItemLista>
            </MenuDiv>
        </div>
    }
}

export default MainMenu;