import { DateTimeResolver } from "graphql-scalars";
import { createAgendamento } from "../Mutations/createAgendamento.js";
import { createCliente } from "../Mutations/createCliente.js";
import { createNewQuadra } from "../Mutations/createQuadra.js";
import deleteAgendamento from "../Mutations/deleteAgendamento.js";
import deleteCliente from "../Mutations/deleteCliente.js";
import { deleteQuadra } from "../Mutations/deleteQuadra.js";
import { getAgendamentosList } from "../Queries/getAgendamentos.js";
import { getClientesList } from "../Queries/getClientes.js";
import { getQuadrasList } from "../Queries/getQuadras.js";

export const resolvers = {
  Date: DateTimeResolver,
  Query: {
    // Operações de leitura de dados
    getAgendamentosList,
    getClientesList,
    getQuadrasList,
  },

  Mutation: {
    // Operações que alteram, removem ou inserem dados
    createAgendamento,
    createCliente,
    createNewQuadra,
    deleteAgendamento,
    deleteCliente,
    deleteQuadra,
  },
};
