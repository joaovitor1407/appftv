import { getQuadrasData } from "../Repositories/quadraRepository.js";
import { Quadra } from "./../Entities/Quadra.js";

export async function getQuadrasList(): Promise<Quadra[]> {
  const listaQuadras = await getQuadrasData();
  return listaQuadras;
}
