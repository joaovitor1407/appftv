import { Quadra } from "../Entities/Quadra.js";
import { saveQuadraData } from "../Repositories/quadraRepository.js";

type createQuadraArgs = {
  nome: string;
  tipo: string;
  id: string;
};
export async function createQuadra(
  _parent: any,
  args: createQuadraArgs,
): Promise<Quadra> {
  const { nome, tipo } = args;

  if (!nome || nome.trim() === "") {
    throw new Error("Nome inválido inserido");
  }

  const novaQuadra = await saveQuadraData({
    nome,
    tipo,
  });
  return novaQuadra;
}
