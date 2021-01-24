import React from 'react';
import './App.css';
import FormularioHome from './components/componenteFormHome.js';
import styled from 'styled-components';
import DropDownHome from './components/componenteDropdown';

class App extends React.Component {
  state = {
    inputNome: "",
    inputIdade: "",
    inputEmail: "",
    inputSelect: "Ensino medio incompleto",
    etapa1Finalizada: false
  }

  onClickTroca = () => {
    this.setState({etapa1Finalizada: !this.state.etapa1Finalizada})
  }

  inputNome = (event) => {
    this.setState({inputNome: event.target.value})
  }
  inputIdade = (event) => {
    this.setState({inputNome: event.target.value})
  }
  inputEmail = (event) => {
    this.setState({inputNome: event.target.value})
  }
  escolhaDropdown = (event) => {
    this.setState({inputSelect: event.target.value})
  }

  render() {
    let titulo = "ETAPA 1 - DADOS GERAIS"

    if(this.state.etapa1Finalizada) {
      titulo = 'ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR'
    }
    
    return (
    <div className="App">
      <h3>{titulo}</h3>
        <FormularioHome  onChange={this.inputNome} value={this.state.inputNome}   pergunta={'1. Qual é o seu nome?'} />
        <FormularioHome  onChange={this.inputIdade} value={this.state.inputIdade} pergunta={'2. Qual sua idade?'} />
        <FormularioHome  onChange={this.inputEmail} value={this.state.inputEmail} pergunta={'3. Qual seu email?'} />
        <DropDownHome value={this.state.inputSelect} onChange={this.escolhaDropdown}/>
        <button onClick={this.onClickTroca}>Próxima Etapa</button>
    </div>
  );
}
}

export default App;
