import axios from "axios"
import { useState, useEffect } from "react";
import { getTodosAeroportos, deleteUsuario, putAeroporto } from "../services/config"
import "../pages/style.css";
import { Passageiro } from "../model/interface";



export function Aeroporto() {
  const [ aeroportos, setAeroportos ] = useState<Passageiro[]>();

  const loadData = async () => {
    const aeroportos: Passageiro[] = await getTodosAeroportos();
    setAeroportos(aeroportos);
  }

  useEffect(() => {
      loadData();
  }, []);

  const onClickdeleteUsuario = (id: number) => {
    deleteUsuario(id).then(() => loadData());
  }


  return (
    <div className="paginas2">
      <table className="paginas2-5">
        <thead>
          <td  className="passageiro1">Código</td>
          <td  className="passageiro1">Nome</td>
          <td  className="passageiro1">Ações</td>
        </thead>
        <tbody>
          {
            aeroportos?.map(aeroporto => {
              return (
                <tr>
                  <td className="passageiro2">{aeroporto.codigoVoo}</td>
                  <td className="passageiro2">{aeroporto.nome}</td>
                  <td className="passageiro2">
                    <a className="ver" href={`/aeroporto/${aeroporto.codigoVoo}`}>Ver</a>
                    <button className="excluir" onClick={() => onClickdeleteUsuario(aeroporto.codigoVoo!)}>Excluir</button>
                    <a className="editar" href={`/atualizar/${aeroporto.codigoVoo}`}>Editar</a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <a href="/usuario-criar" className="criar">Criar passageiro</a>
    </div>
  )
}