import { Agendamento } from "../Entities/Agendamento.js";
import db from "../DataBase/data-source.js";

const agendamentoRepo = db.getRepository(Agendamento);
export async function getAgendamentosData(): Promise<Agendamento[]> {
  return await agendamentoRepo.find({
    relations: ["cliente,", "quadra"]
  })
}
