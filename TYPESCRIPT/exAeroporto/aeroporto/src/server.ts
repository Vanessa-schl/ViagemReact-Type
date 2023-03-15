import express from "express";
import AppDataSource from "./config/database";
import { AeroportoController } from "./controller/aeroportoController";
import { CargoController } from './controller/cargoController';
import {companhiaController} from "./controller/companhiaController";

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado com sucesso ao banco");
    const app = express();
    app.use(express.json());

    app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      next();
    });

    app.get('/aeroporto/todos', new AeroportoController().list);
    app.post("/aeroporto", new AeroportoController().create);
    app.get("/aeroporto/:id", new AeroportoController().get);
    app.put("/aeroporto/:id", new AeroportoController().update);
    app.delete("/aeroporto/:id", new AeroportoController().delete);

    app.get('/companhia/todos', new companhiaController().list);
    app.post("/companhia", new companhiaController().create);
    app.get("/companhia/:id", new companhiaController().get);
    app.put("/companhia/:id", new companhiaController().update);
    app.delete("/companhia/:id", new companhiaController().delete);

    app.get('/cargos', new CargoController().list);

    app.listen(8007);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
