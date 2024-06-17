import logo from './logo.svg';
import './App.css';
import Cabecalho from './componentes/cabecalho';
import Rodape from './componentes/rodape';
import Frases from './componentes/frases';
import List from './componentes/list';
import Loading from './componentes/loading';
import Evento from "./componentes/evento";
import Form from './componentes/form';
import Condicional from './componentes/condicional';
import OutraLista from './componentes/outraLista';
import { useState } from 'react';
import SeuNome from './componentes/seuNome';
import Saudacao from './componentes/saudacao';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Empresa from './pages/empresa';
import Contato from './pages/contato';
import NavBar from './componentes/navBar';

function App() {

  const [nome, setNome] = useState()


  const meusItens = ['Proteína', 'Carboídrato', 'Gordura', 'Sódio']

  return (
    <div className="App">
      <Cabecalho titulo="Título 1"/>
      
      <header className="App-header" lang="pt-br">
        <img src={logo} className="App-logo" alt="logo"/>
        <Loading/>
      </header>

      <main>
       <Frases/>
       <Rodape nome="Kevin" idade="19 anos" profissao="Vistoriador"/>
       <List/>
       <Evento/>
       <Form/>
       <Condicional/>
       <>
         <h1>Renderização de listas</h1>
         <OutraLista itens={meusItens}/>
         <OutraLista itens={[]}/>
       </>


       <>
         <h1>State Lift</h1>
         <SeuNome setNome={setNome}/>
         <Saudacao nome={nome}/>
       </>
       <Router>
          <NavBar/> 
          <Routes>
             <Route exact path='/' element={<Home/>}>
               
             </Route>
             <Route path='/Empresa' element={<Empresa/>}>
             </Route>
             <Route path='/Contato' element={<Contato/>}>
             </Route>
          </Routes>
       </Router>
      </main>
    </div>
  )
}

export default App;
