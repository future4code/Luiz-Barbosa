import React from 'react'
import HeaderPagina from './components/header.js'
import EscolherAtividade from './components/EscolherAtividade.js'


export class App extends React.Component {
  render() {
    return <div> <div className={'App-Container'}>
    <HeaderPagina/>
    </div>
    <EscolherAtividade/>
    </div>
  }
}

export default App;
