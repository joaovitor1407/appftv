import { deleteQuadraData } from "../Repositories/quadraRepository.js";

type deleteQuadraArgs = {
  id: string;
};

export async function deleteQuadra(
  _parent: any,
  args: deleteQuadraArgs,
): Promise<boolean> {
  const { id } = args;
  if (!id || id.trim() === "") {
    throw new Error("ID inválido inserido");
  }
  await deleteQuadraData(id);

  return true;
}
