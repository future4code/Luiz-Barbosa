import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardIdioma from './components/CardIdioma/cardIdioma'
import image  from './imgs/me.jpeg';
import image2 from './imgs/email.svg';
import image3 from './imgs/location-pin.svg';
import image4 from './imgs/language.svg';
import image5 from './imgs/spotify.svg'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={image} 
          nome="Luiz Fernando" 
          descricao="Oi, eu sou Luiz Fernando. Programador Front-end na Labenu. Adoro cantar e tocar violão!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno imagem ={image2} info={"l.fernandobarbosa@hotmail.com"}/>
      <CardPequeno imagem ={image3} info={"Endereço: Rua Joinville"}/>
      <div className="page-section-container">
        <h2>Idiomas</h2>
      <CardIdioma imagem ={image4} linguas={"Inglês, Francês, Espanhol e Português"}/>
    </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Instrutor de programação" 
        />
        
        <CardGrande 
          imagem={image5} 
          nome="Spotify" 
          descricao="Julgando músicas ruins" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
