import db from "../DataBase/data-source.js";
import { Cliente } from "../Entities/Cliente.js";

const clienteRepo = db.getRepository(Cliente);

export async function getClientesData(): Promise<Cliente[]> {
  return await clienteRepo.find();
}

export async function getClientesById(id: string): Promise<Cliente | null> {
  return await clienteRepo.findOneBy({ id });
}

export async function saveClienteData(
  dados: Partial<Cliente>,
): Promise<Cliente> {
  const novoCliente = clienteRepo.create(dados);
  return await clienteRepo.save(novoCliente);
}

export async function deleteClienteData(id: string): Promise<boolean> {
  const deletarID = clienteRepo.delete(id);
  return ((await deletarID).affected ?? 0) > 0; // affected = 1 (Sucesso ao apagar)
  // // affected = 0 (Sem sucesso) affected ?? 0 Anula a possibildade de null ou undefinde
}
export async function findClienteByEmail(
  email: string,
): Promise<Cliente | null> {
  return await clienteRepo.findOneBy({ email });
}
