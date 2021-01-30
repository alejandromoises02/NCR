import React, { useContext } from "react";
import { CuentasContext } from "../context/CuentasContext";
import { PaginaContext } from "../context/PaginaContext";
import { Link } from "react-router-dom";

const PaginaUnica = () => {
  const [pagina, setPagina] = useContext(PaginaContext);
  const [cuentas, setCuentas] = useContext(CuentasContext);

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="row pagination">
          {cuentas.length === 0 ? (
            <div>Espere un momento...</div>
          ) : (
            <>
              {cuentas.map((element, index) => (
                <>
                  {element.description !== "desconocida" ? (
                    <>
                      <li key={element.id} className="page-item col-4 cuadriculas">
                        <Link
                          className="page-link"
                          key={element.number}
                          to={"/cuenta/" + element.number}
                        >
                          {element.description} nro: {element.number}
                        </Link>
                      </li>
                    </>
                  ) : null}
                </>
              ))}
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default PaginaUnica;
