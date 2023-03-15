import axios from "axios";
import { Cargo } from "../model/cargo";

export async function getCargos(): Promise<Cargo[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://127.0.0.1:8007/cargos');
  return data;
}