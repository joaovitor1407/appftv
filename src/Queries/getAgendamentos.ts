import { Agendamento } from "../Entities/Agendamento.js";
import { getAgendamentosData } from "../Repositories/agendamentoRepository.js";

export async function getAgendamentosList(): Promise<Agendamento[]> {
  const listaAgendamento = await getAgendamentosData();
  return listaAgendamento;
}
