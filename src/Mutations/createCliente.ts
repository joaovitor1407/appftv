import { Cliente } from "../Entities/Cliente.js";
import { saveClienteData } from "../Repositories/clienteRepository.js";

interface createClienteArgs {
  data: {
    nome: string;
    email: string;
  };
}
export async function createCliente(
  parent: any,
  args: createClienteArgs,
): Promise<Cliente> {
  const { nome, email } = args.data;

  if (!nome || nome.trim() === "") {
    throw new Error("Nome inválido ou não definido");
  }

  const novoCliente = await saveClienteData({
    nome,
    email,
  });
  return novoCliente;
}
