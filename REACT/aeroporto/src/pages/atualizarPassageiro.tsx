import {getAeroporto, putAeroporto} from "../services/config";
import  "../pages/style.css";
import { useParams } from "react-router-dom";
import { useState } from "react";


export function AtualizarPassageiro() {
    const [ aeroportos, setAeroportos ] = useState<any>();
    const params = useParams();
    console.log(params);
  
    if (!aeroportos) {
      getAeroporto(parseInt(params.id||'', 10))
        .then(res => setAeroportos(res.data));
    }

    const onSubmit = (evt: any) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const data = Object.fromEntries(formData);
        putAeroporto({
            codigoVoo: aeroportos.codigoVoo,
            nome: data.nome.toString(),
        });
        alert("Passageiro Atualizado!");
    }

    return(
        <form onSubmit={onSubmit}>
            <div className="nome2">
                <span className="nome4">Nome</span>
                <input type="text" className="nome5" name="nome" defaultValue={aeroportos?.nome}/>
            </div>

            <input className="atualizar" type="submit" value="Atualizar" />
        </form>
    )
}