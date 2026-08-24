import getClientesData, {
  updateClientesData,
} from "../Repositories/clienteRepository.js";

export default function deleteCliente(
  _parent: any,
  args: any,
  _context: any,
  info: any,
): boolean {
  const { id } = args;
  const listaClientes = getClientesData();

  const existe = listaClientes.find((cliente) => cliente.id === id);

  if (!existe) {
    throw new Error();
  }
  const listaAtualizada = listaClientes.filter((cliente) => cliente.id !== id);
  updateClientesData(listaAtualizada);
  return true;
}
