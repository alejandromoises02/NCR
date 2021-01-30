import "./App.css";
import { CuentasProvider } from "./context/CuentasContext";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CuentaDetailContainer from "./components/CuentaDetailContainer";
import { PaginaProvider } from "./context/PaginaContext";

function App() {
  return (
    <div className="App">
      <main className="container">
        <PaginaProvider>
          <CuentasProvider>
            <BrowserRouter>
              <Switch>

                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/cuenta/:number">
                  <CuentaDetailContainer />
                </Route>

              </Switch>
            </BrowserRouter>
          </CuentasProvider>
        </PaginaProvider>
      </main>
    </div>
  );
}

export default App;
