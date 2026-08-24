import { getQuadrasList } from "../Queries/getQuadras.js";
import {
  getQuadrasData,
  updateQuadrasData,
} from "../Repositories/quadraRepository.js";
import { Quadra } from "../types/typeDefs.js";

export async function createNewQuadra(
  _parent: any,
  args: any,
  _context: any,
  _info: any,
): Promise<Quadra> {
  const { nome, tipo } = args;

  const newQuadra = {
    id: crypto.randomUUID(),
    nome: nome,
    tipo: tipo,
  };

  try {
    const listaQuadras = getQuadrasData();
    listaQuadras.push(newQuadra);
    updateQuadrasData(listaQuadras);
    return newQuadra;
  } catch (error) {
    throw new Error("Erro:" + error);
  }
}
