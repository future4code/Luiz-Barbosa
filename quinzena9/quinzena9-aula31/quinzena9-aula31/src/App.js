import Header from "./components/areaPublica/header";
import Main from "./components/areaPublica/conteudoMain";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from './components/areaPrivada/Login'
import React from 'react'
import AreaPrivada from './components/areaPrivada/AreaPrivada'
import ListaIncritos from './components/areaPrivada/ListaDeInscritos'
import GerenciarViagens from './components/areaPrivada/GerenciarViagens'
import ViagensDisponiveis from './components/areaPublica/ViagensInscricao'
import Formulario from './components/areaPublica/FormularioInscricao'

const App = () => {



  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header/>
          <Main />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>

        <Route exact path="/areaPrivada">
          <AreaPrivada/>
        </Route>

        <Route exact path="/inscritos">
        <ListaIncritos/>
        </Route>
        
        <Route exact path="/admViagens">
        <GerenciarViagens/>
        </Route>

        <Route exact path="/inscricao">
        <ViagensDisponiveis/>
        </Route>

        <Route exact path="/formulario">
        <Formulario/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
