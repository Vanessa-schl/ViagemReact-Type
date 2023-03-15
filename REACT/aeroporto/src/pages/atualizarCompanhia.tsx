import {getCompanhia, putCompanhia} from "../services/configCompanhia";
import  "../pages/styleCompanhia.css";
import { useParams } from "react-router-dom";
import { useState } from "react";


export function AtualizarCompanhia() {
    const [ companhias, setCompanhias ] = useState<any>();
    const params = useParams();
    console.log(params);
  
    if (!companhias) {
        getCompanhia(parseInt(params.id||"", 10))
        .then(res => setCompanhias(res.data));
    }

    const onSubmit = (evt: any) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const data = Object.fromEntries(formData);
        putCompanhia({
            codigoCompanhia: parseInt(companhias.codigoCompanhia),
            nomeAeroporto: data.nomeAeroporto.toString(),
            nomeCompanhia: data.nomeCompanhia.toString()
        });
        alert("Passageiro Atualizado!");
    }

    return(
        <form onSubmit={onSubmit}>
            <div className="nome2">
                <span className="nome4">Nome Companhia</span>
                <input type="text" className="nome5" name="nomeCompanhia" defaultValue={companhias?.nomeCompanhia}/>
            </div>

            <div className="nome2">
                <span className="nome4">Nome Aeroporto</span>
                <input type="text" className="nome5" name="nomeAeroporto" defaultValue={companhias?.nomeAeroporto}/>
            </div>

            <input className="atualizar" type="submit" value="Atualizar" />
        </form>
    )
}