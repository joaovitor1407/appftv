import { deleteAgendamentoData } from "../Repositories/agendamentoRepository.js";

type deleteAgendamentoArgs = {
  id: string;
};

export async function deleteAgendamento(
  _parent: any,
  args: deleteAgendamentoArgs,
): Promise<boolean> {
  const { id } = args;

  if (!id || id.trim() === "") {
    throw new Error("ID inválido inserido");
  }

  await deleteAgendamentoData(id);
  return true;
}
