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
  const hoje = new Date().toISOString().split("T")[0];

  const novoInicio = new Date(`${hoje}T${startsAt}:00`);
  const novoFim = new Date(`${hoje}T${endsAt}:00`);

  if (novoFim <= novoInicio) {
    throw new Error("Horário inválido inserido");
  }
  const listaAgendamento = await getAgendamentosList();
  const conflito = listaAgendamento.some((agendamento) => {
    const inicioAgendado = new Date(agendamento.startsAt);
    const fimAgendado = new Date(agendamento.endsAt);

    const sobreposicao = novoInicio <= fimAgendado && novoFim >= inicioAgendado;
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
  const horaInicio = agendamentoSalvo.startsAt
    .getHours()
    .toString()
    .padStart(2, "0");
  const minInicio = agendamentoSalvo.startsAt
    .getMinutes()
    .toString()
    .padStart(2, "0");
  const horaFim = agendamentoSalvo.endsAt
    .getHours()
    .toString()
    .padStart(2, "0");
  const minFim = agendamentoSalvo.endsAt
    .getMinutes()
    .toString()
    .padStart(2, "0");

  return {
    ...agendamentoSalvo,
    startsAt: `${horaInicio}:${minInicio}`,
    endsAt: `${horaFim}:${minFim}`,
  } as unknown as Agendamento;
}
