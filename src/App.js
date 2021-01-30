import './App.css';
import {CuentasProvider} from './context/CuentasContext';
import Plantilla from './components/Plantilla';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CuentaDetailContainer from './components/CuentaDetailContainer';

function App() {
  return (
    <div className="App">
      <main>
        <CuentasProvider>
        <BrowserRouter>

        <Switch>
          <Route exact path='/'>
          <Plantilla/>
          </Route>

          <Route exact path='/cuenta/:number'>
            <CuentaDetailContainer/>
          </Route>
          </Switch>





        </BrowserRouter> 
        </CuentasProvider>
      </main>
    </div>
  );
}

export default App;
