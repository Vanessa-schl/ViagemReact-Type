import { postAeroporto } from "../services/config";
import { Cargo } from "../model/cargo";
import { getCargos } from "../services/cargos";
import { useEffect, useState } from "react";

import "../pages/style.css";

export function NovoPassageiro() {
    const [ cargos, setCargos ] = useState<Cargo[]>([]);

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    console.log(formData);

    const data = Object.fromEntries(formData);
    postAeroporto({
      nome: data.nome.toString(),
     // codigo_cargo: parseInt(data.codigo_cargo.toString(), 10),
    });
  };

  const loadCargos = async () => {
    const cargos = await getCargos();
    setCargos(cargos);
  };

  useEffect(() => {
    loadCargos();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="nome2">
        <span>Nome</span>
        <input type="text" name="nome" />
      </div>

      <div>
        <span className="seletor1">Cargo</span>
        <select className="seletor" name="codigo_cargo">
          {cargos.map((cargo) => {
            return <option value={cargo.codigo}>{cargo.nome}</option>;
          })}
        </select>
      </div>

      <input className="salvar" type="submit" value="Salvar" />
    </form>
  );
}
