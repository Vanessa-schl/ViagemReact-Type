import axios from "axios"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanhia } from "../services/configCompanhia";

export function CompanhiaVer() {
  const [ companhias, setCompanhia ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!companhias) {
    getCompanhia(parseInt(params.id||'', 10))
      .then(res => setCompanhia(res.data));
  }
  return (
    <div className="bordaUsu">
      <div>
        <span className="codigoUsu">Código</span>
        <input type="text" value={companhias?.codigoCompanhia} />
      </div>
      <div>
        <span className="nomeUsu">Nome Companhia </span>
        <input type="text" value={companhias?.nomeCompanhia} />
      </div>

      <div>
        <span className="nomeUsu">Nome Aeroporto</span>
        <input type="text" value={companhias?.nomeAeroporto} />
      </div>
    </div>
  );
}
