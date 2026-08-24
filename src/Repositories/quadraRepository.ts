import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
// import { Quadra } from "../types/interfaces.js";

type Quadra = {
  id: string;
  nome: string;
  tipo: string;
};
export function getQuadrasData(): Quadra[] {
  try {
    const pathFile = join(process.cwd(), "src", "JSONData", "quadrasData.json");

    const data = readFileSync(pathFile, "utf-8");
    const quadras: Quadra[] = JSON.parse(data);
    return quadras;
  } catch (error) {
    throw new Error("Erro:" + error);
  }
}

export function updateQuadrasData(newList: Quadra[]): void {
  try {
    const pathFile = join(process.cwd(), "src", "JSONData", "quadrasData.json");

    writeFileSync(pathFile, JSON.stringify(newList), "utf-8");
  } catch (error) {
    throw new Error("Erro:" + error);
  }
}
