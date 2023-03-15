import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Aeroporto } from "../model/aeroportoModel";
import {Cargo} from "../model/cargo";
import {CompanhiaAerea} from "../model/companhiaAerea";

const AppDataSource = new DataSource({
  type: 'oracle',
  host: '192.168.0.50',
  port: 1521,
  username: 'system',
  password: 'pulsati2023',
  database: 'xe',
  entities: [Aeroporto, Cargo, CompanhiaAerea],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
console.log('AppDataSource', AppDataSource.initialize);
export default AppDataSource;
