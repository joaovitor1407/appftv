import {
  getQuadrasData,
  updateQuadrasData,
} from "../Repositories/quadraRepository.js";

export function deleteQuadra(
  _parent: any,
  args: any,
  _context: any,
  _info: any,
): boolean {
  const { id } = args;
  const listaQuadras = getQuadrasData();

  const ifExists = listaQuadras.some((quadra) => quadra.id === id);

  if (!ifExists) {
    throw new Error("Quadra não encontrada");
  }

  const listaAtualizada = listaQuadras.filter((quadra) => quadra.id !== id);
  updateQuadrasData(listaAtualizada);
  return true;
}
