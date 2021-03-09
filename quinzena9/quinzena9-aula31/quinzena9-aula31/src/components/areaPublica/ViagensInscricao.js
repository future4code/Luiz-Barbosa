import React from "react";
import { DivPrincipal, SectionLista, DivPlanetas, BotaoInscricao} from "./ViagensInscricaoStyles";
import {useHistory} from 'react-router-dom'

const ViagensDisponiveis = () => {
    const history = useHistory()

    const onClickIr = () => {
    history.push("/formulario")
    }
  return (
    <DivPrincipal>
      <SectionLista>
        <p>LISTA DE VIAGENS</p>
        <DivPlanetas>
          Venus 
        </DivPlanetas>
        <BotaoInscricao onClick={onClickIr}>Ir</BotaoInscricao>
        <DivPlanetas>
          Uranus
        </DivPlanetas>
        <BotaoInscricao onClick={onClickIr}>Ir</BotaoInscricao>
        <DivPlanetas>
          Marte 
        </DivPlanetas>
        <BotaoInscricao onClick={onClickIr}>Ir</BotaoInscricao>
      </SectionLista>
    </DivPrincipal>
  );
};

export default ViagensDisponiveis;
