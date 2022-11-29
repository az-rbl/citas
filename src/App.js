import './App.css';
import { useState } from 'react';
import RegistroFecha from './components/RegistroFecha';
import RegistroPaciente from './components/RegistroPaciente';
import Home from './components/Home';
import Cita from './components/Cita';

function App() {
const [menu, setMenu] = useState(0)
const [paciente, setPaciente] = useState(null)
const [email, setEmail] = useState(null)
const [estudio, setEstudio] = useState(null)
const [fecha, setFecha] = useState(null)
const [hora, setHora] = useState(null)

function HSubmit(e){
  console.log(menu);
  e.preventDefault();
  setMenu(1);
  console.log(menu);
}
function RPSubmit(e){
  e.preventDefault();
  setMenu(2);
  setPaciente(e.target.nombre.value);
  console.log(e.target.nombre.value)
  setEmail(e.target.email.value);
  setEstudio(e.target.estudio.value);
  console.log(menu);
}
function RFSubmit(e){
   e.preventDefault();
  setMenu(3);

  setFecha(e.target.value)
  console.log(e.target.value)
  setHora(e.target.hora.value)
}
function CSubmit(e){
  console.log(menu);
  e.preventDefault();
  setMenu(0);
  console.log(menu);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Laboratorio Clínico
        </h1>
        {menu===0?(<Home Submit ={HSubmit}/>):(<></>)}
        {menu===1?(<RegistroPaciente RPSubmit = {RPSubmit}/>):(<></>)}
        {menu===2?(<RegistroFecha Submit ={RFSubmit}/>):(<></>)}
        {menu===3?(<Cita Submit = {CSubmit}  email = {email} estudio = {estudio} />):(<></>)}
      </header>
    </div>
  );
}

export default App;
