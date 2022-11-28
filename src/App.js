import './App.css';
import Registro_fecha from './components/Registro_fecha';
import Registro_paciente from './components/Registro_paciente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Laboratorio Clínico
        </h1>
          <Registro_paciente/>
          <Registro_fecha/>
      </header>
    </div>
  );
}

export default App;
