import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Huguinho'}
          fotoUsuario={'https://i.pinimg.com/originals/29/60/24/2960243be75f23399d095ebafc32f51e.png'}
          fotoPost={'https://imagensemoldes.com.br/wp-content/uploads/2020/03/Mickey-Louie-Dewey-Huey-Daisy-Tio-Patinhas-PNG-04.png'}
        />
        <Post
          nomeUsuario={'Luizinho'}
          fotoUsuario={'https://vignette.wikia.nocookie.net/ducktales/images/3/38/Luisinho.png/revision/latest?cb=20180421214835&path-prefix=pt-br'}
          fotoPost={'https://vignette.wikia.nocookie.net/ducktales/images/3/38/Luisinho.png/revision/latest?cb=20180421214835&path-prefix=pt-br'}
        />
        <Post
          nomeUsuario={'Zezinho'}
          fotoUsuario={'https://vignette.wikia.nocookie.net/ducktales/images/4/43/Zezinho_Ducktales.png/revision/latest?cb=20180421202122&path-prefix=pt-br'}
          fotoPost={'https://vignette.wikia.nocookie.net/ducktales/images/4/43/Zezinho_Ducktales.png/revision/latest?cb=20180421202122&path-prefix=pt-br'}
        />
      </div>
    );
  }
}

export default App;
