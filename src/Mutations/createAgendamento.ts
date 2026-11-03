import { Agendamento } from "../Entities/Agendamento.js";
import { getAgendamentosList } from "../Queries/getAgendamentos.js";
import { saveAgendamentoData } from "../Repositories/agendamentoRepository.js";
import { findClienteByEmail } from "../Repositories/clienteRepository.js";
import { findQuadraByNome } from "../Repositories/quadraRepository.js";

type createAgendamentoArgs = {
  data: {
    startsAt: string;
    endsAt: string;
    clienteId: string;
    quadraId: string;
    email: string;
    nome: string;
  };
};

export async function createAgendamento(
  _parent: any,
  args: createAgendamentoArgs,
): Promise<Agendamento> {
  const { startsAt, endsAt, email, nome } = args.data;

  const cliente = await findClienteByEmail(email);
  if (!cliente) throw new Error("E-mail não encontrado");

  const quadra = await findQuadraByNome(nome);
  if (!quadra) throw new Error("Não existe quadra com este nome");

  const quadraId = quadra.id;
  const clienteId = cliente.id;

  const novoInicio = new Date(startsAt);
  const novoFim = new Date(endsAt);

  if (novoFim <= novoInicio) {
    throw new Error("Horário inválido inserido");
  }
  const listaAgendamento = await getAgendamentosList();
  const conflito = listaAgendamento.some((agendamento) => {
    if (agendamento.quadraId !== quadraId) {
      return false;
    }
    const inicioAgendado = new Date(agendamento.startsAt);
    const fimAgendado = new Date(agendamento.endsAt);

    const sobreposicao = novoInicio < fimAgendado && novoFim > inicioAgendado;
    return sobreposicao;
  });

  if (conflito) {
    throw new Error("Horário já selecionado, escolha outro horário");
  }

  const agendamentoSalvo = await saveAgendamentoData({
    startsAt: novoInicio,
    endsAt: novoFim,
    clienteId,
    quadraId,
  });

  return {
    ...agendamentoSalvo,
    startsAt: agendamentoSalvo.startsAt.toISOString(),
    endsAt: agendamentoSalvo.endsAt.toISOString(),
  } as unknown as Agendamento;
}
