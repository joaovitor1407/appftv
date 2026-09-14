import { Cliente } from "../Entities/Cliente.js";
import { getClientesData } from "../Repositories/clienteRepository.js";

export async function getClientesList(): Promise<Cliente[]> {
  const listaClientes = await getClientesData();
  return listaClientes;
}
