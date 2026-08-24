import getClientesData, {
  updateClientesData,
} from "../Repositories/clienteRepository.js";
import { Cliente } from "../types/typeDefs.js";

export async function createCliente(
  _parent: any,
  _context: any,
  args: any,
  _info: any,
): Promise<Cliente> {
  const { nome } = args.data;
  const listaClientes = getClientesData();
  const newClient = {
    nome: nome,
    id: crypto.randomUUID(),
  };

  listaClientes.push(newClient);
  updateClientesData(listaClientes);
  return newClient;
}
