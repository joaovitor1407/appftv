import "dotenv/config"; // <- Essencial para carregar as variáveis do .env
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cliente } from "../Entities/Cliente.js";
import { Quadra } from "../Entities/Quadra.js";
import { Agendamento } from "../Entities/Agendamento.js";
console.log(process.env.DATABASE_URL);

export const db = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL!,
  synchronize: true,
  logging: true,
  entities: [Cliente, Agendamento, Quadra],
  migrations: [],
});

export default db;
