import { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  //Satet del custom hook
  const [state, setState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
      onChange={(e) => setState(e.target.value)}
      value={state}
      className="browser-default"
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );
  return [state, SelectNoticias, setState];
};

export default useSelect;
