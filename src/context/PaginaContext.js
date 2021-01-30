import React, { useState } from "react";

export const PaginaContext = React.createContext([]);

export const PaginaProvider = ({ children }) => {
  const [pagina, setPagina] = useState(1);

  return (
    <PaginaContext.Provider value={[pagina, setPagina]}>
      {children}
    </PaginaContext.Provider>
  );
};
