import React, {useState} from "react";
import {
  DivPrincipal,
  SectionLista,
  Dropdown,
  StyledInput, 
  Title,
  Button
} from "./ViagensInscricaoStyles";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { axiosConfig, BASE_URL } from "../../requisicoes/requisicoes";

const ViagensDisponiveis = () => {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [descricao, setDescricao] = useState('')
  const [profissao, setProfissao] = useState('')
  const [pais, setPais] = useState('')


  const onChangeNome = (event) => {
    setNome(event.target.value)
  }
  const onChangeIdade = (event) => {
    setIdade(event.target.value)
  }
  const onChangeDescricao = (event) => {
    setDescricao(event.target.value)
  }
  const onChangeProfissao = (event) => {
    setProfissao(event.target.value)
  }
  const onChangePais = (event) => {
    setPais(event.target.value)
  }
  
  const body = {
    name: nome,
    age: idade,
    applicationText: descricao,
    profession: profissao,
    country: pais
  }

  const onSubmit = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/trips/NoIFVcOiSgTKTIPVZwXS/apply`, body, axiosConfig).then((response)=> {
        alert("Inscrito com sucesso!")
    }).catch((error) => {
      console.log(error)
    })

    setNome('')
    setIdade('')
    setDescricao('')
    setProfissao('')
    setPais('')
  }


  return (
    <DivPrincipal>
      <SectionLista>
        <Title>Formulário de Inscrição</Title>
        <div>
          <form onSubmit={onSubmit}>
            <StyledInput value={nome} onChange={onChangeNome} placeholder="Nome" type="text" />
            {/* <Dropdown>
              <option>Mercúrio</option>
              <option>Vênus</option>
              <option>Marte</option>
              <option>Jupiter</option>
              <option>Saturno</option>
              <option>Urano</option>
              <option>Netuno</option>
              <option>Plutão</option>
            </Dropdown> */}
            <StyledInput value={idade} onChange={onChangeIdade} placeholder="Idade" type="number" />
            <StyledInput value={descricao} onChange={onChangeDescricao} placeholder="Por que você?" type="text" />
            <StyledInput value={profissao} onChange={onChangeProfissao} placeholder="Profissão" type="text" />
            <StyledInput value={pais} onChange={onChangePais} placeholder="País" type="text" />
            <Button>Enviar</Button>
          </form>
        </div>
      </SectionLista>
    </DivPrincipal>
  );
};

export default ViagensDisponiveis;
