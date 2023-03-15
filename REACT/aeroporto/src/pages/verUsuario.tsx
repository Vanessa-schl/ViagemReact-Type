import axios from "axios"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAeroporto } from "../services/config";

export function AeroportoVer() {
  const [ aeroportos, setAeroportos ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!aeroportos) {
    getAeroporto(parseInt(params.id||'', 10))
      .then(res => setAeroportos(res.data));
  }
  return (
    <div className="bordaUsu">
      <div>
        <span className="codigoUsu">Código</span>
        <input type="text" value={aeroportos?.codigoVoo} />
      </div>
      <div>
        <span className="nomeUsu">Nome</span>
        <input type="text" value={aeroportos?.nome} />
      </div>
    </div>
  );
}
