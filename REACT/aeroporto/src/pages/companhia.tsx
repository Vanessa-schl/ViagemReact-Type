import axios from "axios"
import { useState, useEffect } from "react";
import { getTodosCompanhia, deleteCompanhia, putCompanhia } from "../services/configCompanhia"
import "../pages/styleCompanhia.css";
import { CompanhiaAerea } from "../model/companhia";



export function Companhia() {
  const [ aeroportos, setAeroportos ] = useState<any[]>();

  const loadData = async () => {
    const aeroportos: CompanhiaAerea[] = await getTodosCompanhia();
    setAeroportos(aeroportos);
  }

  useEffect(() => {
      loadData();
  }, []);

  const onClickdeleteUsuario = (id: number) => {
    deleteCompanhia(id).then(() => loadData());
  }


  return (
    <div className="paginas2">
      <table className="paginas2-57">
        <thead>
          <tr>
          <td  className="passageiro1">Código</td>
          <td  className="passageiro1">Nome</td>
          <td  className="passageiro1">Ações</td>
          </tr>
        </thead>
        <tbody>
          {
            aeroportos?.map(aeroporto => {
              return (
                <tr>
                  <td className="passageiro2">{aeroporto.codigoCompanhia}</td>
                  <td className="passageiro2">{aeroporto.nomeCompanhia}</td>
                  <td className="passageiro2">{aeroporto.nomeAeroporto}</td>
                  <td className="passageiro2">
                    <a className="ver" href={`/companhia/${aeroporto.codigoCompanhia}`}>Ver</a>
                    <button className="excluir" onClick={() => onClickdeleteUsuario(aeroporto.codigoCompanhia!)}>Excluir</button>
                    <a className="editar" href={`/atualizarComp/${aeroporto.codigoCompanhia}`}>Editar</a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <a href="/novaComp" className="criar">Criar Companhia</a>
    </div>
  )
}