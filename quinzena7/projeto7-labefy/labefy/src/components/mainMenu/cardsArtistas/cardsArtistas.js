import React from 'react'
import {CardArtista, ContainerDosCards, ImagemEditada} from './cardsArtistasStyled.js'

export class CardsArtistas extends React.Component {
    render() {
        return <ContainerDosCards>
            <CardArtista><ImagemEditada src={'https://www.udiscovermusic.com/wp-content/uploads/2020/01/Rihanna-Anti-album-cover-820.jpg'}/></CardArtista>
            <CardArtista><ImagemEditada src={'https://static.billboard.com/files/media/Taylor-Swift-Lover-album-art-2019-billboard-1240-compressed.jpg'}/></CardArtista>
            <CardArtista><ImagemEditada src={'https://www.udiscovermusic.com/wp-content/uploads/2015/10/Janelle-Mona%CC%81e-Dirty-Computer-.jpg'}/></CardArtista>
            
        </ContainerDosCards>
    }
}

export default CardsArtistas;