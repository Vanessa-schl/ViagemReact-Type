import { postCompanhia } from "../services/configCompanhia";
import { Cargo } from "../model/cargo";
import { getCargos } from "../services/cargos";
import { useEffect, useState } from "react";

import "../pages/style.css";

export function NovaCompanhia() {
    const [ companhia, setCompanhia ] = useState<Cargo[]>([]);

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    console.log(formData);

    alert("enviado")
    const data = Object.fromEntries(formData);
    postCompanhia({
        nomeCompanhia: data.nomeCompanhia.toString(),
        nomeAeroporto: data.nomeAeroporto.toString(),
     // codigo_cargo: parseInt(data.codigo_cargo.toString(), 10),
    });
  };

  const loadCargos = async () => {
    const cargos = await getCargos();
    setCompanhia(cargos);
  };

  useEffect(() => {
    loadCargos();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="nome2">
        <span>nomeCompanhia</span>
        <input type="text" name="nomeCompanhia" />
      </div>

      <div className="nome2">
        <span>nomeAeroporto</span>
        <input type="text" name="nomeAeroporto" />
      </div>

      <div>
        <span className="seletor1">Cargo</span>
        <select className="seletor" name="codigo_cargo">
          {companhia.map((cargo) => {
            return <option value={cargo.codigo}>{cargo.nome}</option>;
          })}
        </select>
      </div>

      <input className="salvar" type="submit" value="Salvar" />
    </form>
  );
}
