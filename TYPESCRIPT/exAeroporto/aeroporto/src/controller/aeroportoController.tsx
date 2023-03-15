import { Request, Response } from "express";
import AppDataSource from "../config/database";
import {Aeroporto} from "../model/aeroportoModel";


export class AeroportoController {

  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroportos = await repo.find();
    res.json(aeroportos);
  }

  async create(req: Request, res: Response) {
    const {
      nome,
    }: {
      nome: string;
    } = req.body;
    const aeroporto = new Aeroporto();
    aeroporto.nome = nome;
  

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.save(aeroporto);

    res.json(aeroporto);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Aeroporto);
    const usuario = await repo.findOneBy({ codigoVoo: parseInt(id, 10) });

    res.json(usuario);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const {nome} = req.body;

    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroporto = await repo.findOneBy({ codigoVoo: parseInt(id, 10) });
    aeroporto.nome = nome;

    await repo.save(aeroporto);
    res.json(aeroporto);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar usuario" });
  }
}
