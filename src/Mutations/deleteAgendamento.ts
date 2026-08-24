import { getAgendamentosList } from "../Queries/getAgendamentos.js";
import { updateAgendamentosData } from "../Repositories/agendamentoRepository.js";

export default function deleteAgendamento(
  _parent: any,
  args: any,
  _context: any,
  _info: any,
): boolean {
  const { id } = args;
  const listaAgendamento = getAgendamentosList();

  const Exists = listaAgendamento.find((agendamento) => agendamento.id === id);

  if (!Exists) {
    throw new Error("Agendamento não encontrado");
  }

  const listaAtualizada = listaAgendamento.filter(
    (agendamento) => agendamento.id !== id,
  );
  updateAgendamentosData(listaAtualizada);
  return true;
}
