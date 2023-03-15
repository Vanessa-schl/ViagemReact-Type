import { Request, Response } from "express";
import AppDataSource from "../config/database";
import { CompanhiaAerea } from "../model/companhiaAerea";

export class companhiaController {

  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(CompanhiaAerea);
    const companhias = await repo.find();
    res.json(companhias);
  }

  async create(req: Request, res: Response) {
    const {
        nomeCompanhia,
        nomeAeroporto: nomeAeroporto,
    }: {
        nomeCompanhia: string;
        nomeAeroporto: string;
    } = req.body;
    const companhia = new CompanhiaAerea();
    companhia.nomeCompanhia = nomeCompanhia;
    companhia.nomeAeroporto = nomeAeroporto;
  

    const repo = AppDataSource.getRepository(CompanhiaAerea);
    await repo.save(companhia);

    res.json(companhia);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(CompanhiaAerea);
    const usuario = await repo.findOneBy({ codigoCompanhia: parseInt(id, 10) });

    res.json(usuario);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const {nomeCompanhia, nomeAeroporto} = req.body;

    const repo = AppDataSource.getRepository(CompanhiaAerea);
    const companhia = await repo.findOneBy({ codigoCompanhia: parseInt(id, 10) });
    companhia.nomeCompanhia = nomeCompanhia;
    companhia.nomeAeroporto = nomeAeroporto;
    await repo.save(companhia);
    res.json(companhia);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(CompanhiaAerea);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar usuario" });
  }
}
