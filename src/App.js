import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="wrapper iframe-mode" data-widget="iframe">
      <Header/>
      <Menu/>
      <Dashboard/>
    </div>
    </BrowserRouter>
  );
}

export default App;
