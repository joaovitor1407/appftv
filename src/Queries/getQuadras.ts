import { getQuadrasData } from "../Repositories/quadraRepository.js";
import { Quadra } from "../types/typeDefs.js";

export function getQuadrasList(): Quadra[] {
  const listaQuadras = getQuadrasData();
  return listaQuadras;
}
