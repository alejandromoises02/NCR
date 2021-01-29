import './App.css';
import {CuentasProvider} from './context/Cuentas';

function App() {
  return (
    <div className="App">
      <main>
        <CuentasProvider>
          <h1>HOLA MUNDO</h1>
        </CuentasProvider>
      </main>
    </div>
  );
}

export default App;
