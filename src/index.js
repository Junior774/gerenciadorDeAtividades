import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Tabela } from './components/Tabela/index.js';
import { Relatorio } from './components/Relatorio';

// // <Route exact path="/tabela" component={(props) => <Tabela {...props} />} />
//<Route exact path="/tabela" render={(props) => <Tabela{...props}/>} />
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route exact path="/tabela" render={(props) => <Tabela{...props} name={"Junior"} />} />
        <Route exact path="/relatorio" render={(props) => <Relatorio{...props} name={"Junior"} />} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
