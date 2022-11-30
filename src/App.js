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
const [fecha, setFecha] = useState(new Date())
const [hora, setHora] = useState(null)
const [folio, setFolio] =useState("")

function HSubmit(e){
  console.log(menu);
  e.preventDefault();
  setMenu(1);
  console.log(menu);
}

function cCita(){
  setMenu(3);
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
const RFSubmit=(date, time)=>{
  setMenu(3);
  setFecha(date.toDateString())
  setHora(time.target.value)
  console.log(date)
  console.log(time.target.value)
  setFolio(Math.floor(Math.random() * 16000).toString(16)  )

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
        {menu===0?(<Home Submit ={HSubmit} Cita ={cCita} />):(<></>)}
        {menu===1?(<RegistroPaciente RPSubmit = {RPSubmit}/>):(<></>)}
        {menu===2?(<RegistroFecha Submit ={RFSubmit}/>):(<></>)}
        {menu===3?(<Cita Submit = {CSubmit}  email = {email} estudio = {estudio} fecha ={fecha} hora ={hora} folio={folio}/>):(<></>)}
      </header>
    </div>
  );
}

export default App;
