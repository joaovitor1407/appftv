import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cliente } from "../Entities/Cliente.js";
import { Agendamento } from "../Entities/Agendamento.js";
import { Quadra } from "../Entities/Quadra.js";

export const db = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5342,
  synchronize: true,
  logging: true,
  entities: [Cliente, Agendamento, Quadra],
  migrations: [],
  username: "postgres",
  password: "postgres",
  database: "AppFtv",
});
export default db;
