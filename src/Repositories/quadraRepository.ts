import db from "../DataBase/data-source.js";
import { Quadra } from "../Entities/Quadra.js";

const quadraRepo = db.getRepository(Quadra);
export async function getQuadrasData(): Promise<Quadra[]> {
  return await quadraRepo.find();
}

export async function findQuadraById(id: string): Promise<Quadra | null> {
  return await quadraRepo.findOneBy({ id });
}

export async function deleteQuadraData(id: string): Promise<boolean> {
  const deletarID = quadraRepo.delete({ id });
  return ((await deletarID).affected ?? 0) > 0;
}

export async function saveQuadraData(dados: Partial<Quadra>): Promise<Quadra> {
  const novaQuadra = quadraRepo.create(dados);
  return await quadraRepo.save(novaQuadra);
}

export async function findQuadraByNome(nome: string): Promise<Quadra | null> {
  return await quadraRepo.findOneBy({ nome });
}
