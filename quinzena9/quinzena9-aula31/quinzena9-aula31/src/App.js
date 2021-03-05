import Header from "./components/areaPublica/header";
import Main from "./components/areaPublica/conteudoMain";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from './components/areaPrivada/Login'
import { useHistory } from 'react-router-dom'
import React from 'react'

const App = () => {

const history = useHistory()

const onClickLogin = () => {
    history.push("login")
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header onClickLogin={onClickLogin}/>
          <Main />
        </Route>
        <Route exact path='/login'>
          <LoginScreen />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
