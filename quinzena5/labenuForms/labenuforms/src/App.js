import React from 'react';
import './App.css';
import FormularioHome from './components/componenteFormHome.js';
import styled from 'styled-components';
import DropDownHome from './components/componenteDropdown';
import FormularioEtapa2 from './components/componenteFormEtapa2.js';
import FormularioEtapa3 from './components/componenteFormEtapa3.js';
import FormularioEnd from './components/componenteFormEnd.js';


class App extends React.Component {
  state = {
    inputNome: "",
    inputIdade: "",
    inputEmail: "",
    inputSelect: "Ensino medio incompleto",
    etapa: 1

  }

  onClickTroca = () => {
    this.setState({etapa: this.state.etapa + 1})
    
    
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
    let titulo
    let botao
    const etapaEscolhida = () => {
      switch (this.state.etapa) {
        case 1:
          titulo = "ETAPA 1 - DADOS GERAIS";
          botao = "Próxima Etapa"
          return <div> <FormularioHome  onChange={this.inputNome} value={this.state.inputNome}   pergunta={'1. Qual é o seu nome?'} />
          <FormularioHome  onChange={this.inputIdade} value={this.state.inputIdade} pergunta={'2. Qual sua idade?'} />
          <FormularioHome  onChange={this.inputEmail} value={this.state.inputEmail} pergunta={'3. Qual seu email?'} />
          <DropDownHome value={this.state.inputSelect} onChange={this.escolhaDropdown}/></div>
        case 2:
          botao = "Próxima Etapa"
          titulo = "ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR";
          return <FormularioEtapa2 />;
        case 3:
          botao = "Próxima Etapa"
          titulo = "ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO";
          return <FormularioEtapa3 />;
        case 4:
          botao = "Voltar"
          titulo = "O FORMULÁRIO ACABOU";
          return <FormularioEnd />;
        default:
          botao = "Voltar"
          titulo = "O FORMULÁRIO ACABOU"
          return <FormularioEnd />;
      }
    };
    
    return (
    <div className="App">
      <h3>{titulo}</h3>
      {etapaEscolhida()}
        <button onClick={this.onClickTroca}>{botao}</button>
    </div>
  );
}
}

export default App;
