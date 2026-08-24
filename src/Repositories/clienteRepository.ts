import { join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";
import { Cliente } from "../Entities/Cliente.js";

export default function getClientesData(): Cliente[] {
  try {
    const filePath = join(
      process.cwd(),
      "src",
      "JSONData",
      "clientesData.json",
    );

    const data = readFileSync(filePath, "utf-8");
    const clientes = JSON.parse(data);
    return clientes;
  } catch (error) {
    throw new Error("Erro:" + error);
  }
}

export function updateClientesData(newList: Cliente[]): void {
  try {
    const pathFile = join(
      process.cwd(),
      "src",
      "JSONData",
      "clientesData.json",
    );
    writeFileSync(pathFile, JSON.stringify(newList, null, 2), "utf-8");
  } catch (error) {
    throw new Error("Erro:" + error);
  }
}
