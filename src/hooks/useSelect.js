import { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  //Satet del custom hook
  const [state, setState] = useState("");

  const SelectNoticias = () => {
    <select className="browse-default">
      <option value="">Seleccione</option>
    </select>;
  };
  return [state, SelectNoticias];
};

export default useSelect;
