import axios from "axios";
import { CompanhiaAerea } from "../model/companhia";

export async function getTodosCompanhia(): Promise<CompanhiaAerea[]> {
  const {data} = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8007/companhia/todos');
  return data;
}

export async function getCompanhia(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8007/companhia/${id}`);
}

export async function postCompanhia(dados: CompanhiaAerea) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8007/companhia', dados);
}

export function deleteCompanhia(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8007/companhia/${id}`);
}

export function putCompanhia(dados: CompanhiaAerea) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
  .put(`http://localhost:8007/companhia/${dados.codigoCompanhia}`, dados);
}
