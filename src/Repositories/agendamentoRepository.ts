import db from "../DataBase/data-source.js";
import { Agendamento } from "../Entities/Agendamento.js";

const agendamentoRepo = db.getRepository(Agendamento);

export async function getAgendamentosData(): Promise<Agendamento[]> {
  return await agendamentoRepo.find();
}

export async function getAgendamentoById(
  id: string,
): Promise<Agendamento | null> {
  return await agendamentoRepo.findOneBy({ id });
}

export async function saveAgendamentoData(dados: Partial<Agendamento>) {
  const novoAgendamento = agendamentoRepo.create(dados);
  return await agendamentoRepo.save(novoAgendamento);
}

export async function deleteAgendamentoData(id: string): Promise<boolean> {
  const deletarID = agendamentoRepo.delete(id);
  return ((await deletarID).affected ?? 0) > 0;
}

export async function getAgendamentosByQuadra(
  quadraId: string,
): Promise<Agendamento[]> {
  return await agendamentoRepo.find({
    where: { quadraId },
  });
}
