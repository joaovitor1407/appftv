import { deleteClienteData } from "../Repositories/clienteRepository.js";

type deleteClienteArgs = {
  id: string;
};

export async function deleteCliente(
  _parent: any,
  args: deleteClienteArgs,
): Promise<boolean> {
  const { id } = args;

  if (!id || id.trim() === "") {
    throw new Error("ID inválido inserido");
  }

  await deleteClienteData(id);

  return true;
}
