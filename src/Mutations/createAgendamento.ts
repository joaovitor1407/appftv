import { Agendamento } from "../Entities/Agendamento.js";
import { getAgendamentosList } from "../Queries/getAgendamentos.js";
import { updateAgendamentosData } from "../Repositories/agendamentoRepository.js";

export async function createAgendamento(
  _parent: any,
  args: any,
  context: any,
  _info: any,
): Promise<Agendamento> {
  const { startsAt, endsAt, clienteId, quadraId } = args.data;

  const novoInicio = new Date(startsAt);
  const novoFim = new Date(endsAt);

  if (endsAt < startsAt) {
    throw new Error("Horário Inválido");
  }
  const listaAgendamento = getAgendamentosList();

  const firstConflict = listaAgendamento.some((agendamento) => {
    if (agendamento.quadraId !== quadraId) {
      return false;
    }
    const inicioAgendado = new Date(agendamento.startsAt);
    const fimAgendado = new Date(agendamento.endsAt);

    const secondConflict =
      inicioAgendado >= novoFim || novoInicio <= fimAgendado;
    return secondConflict;
  });

  if (firstConflict) {
    throw new Error("Horário já em uso nesta quadra");
  }

  const novoAgendamento = {
    id: crypto.randomUUID(),
    startsAt: startsAt,
    endsAt: endsAt,
    clienteId: clienteId,
    quadraId: quadraId,
  };
  listaAgendamento.push(novoAgendamento);
  updateAgendamentosData(listaAgendamento);

  return novoAgendamento;
}
