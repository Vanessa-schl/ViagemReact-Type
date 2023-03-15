import axios from "axios";
import { Passageiro } from "../model/interface";

export async function getTodosAeroportos(): Promise<Passageiro[]> {
  const {data} = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8007/aeroporto/todos');
  return data;
}

export async function getAeroporto(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8007/aeroporto/${id}`);
}

export async function postAeroporto(dados: Passageiro) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8007/aeroporto', dados);
}

export function deleteUsuario(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8007/aeroporto/${id}`);
}

export function putAeroporto(dados: Passageiro) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
  .put(`http://localhost:8007/aeroporto/${dados.codigoVoo}`, dados);
}
