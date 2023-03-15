import { Request, Response } from "express";
import AppDataSource from "../config/database";
import { Cargo } from "../model/cargo";

export class CargoController {
  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Cargo);
    const cargos = await repo.find();
    res.json(cargos);
  }
}