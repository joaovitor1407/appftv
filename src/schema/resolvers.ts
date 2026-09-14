import { DateTimeResolver } from "graphql-scalars";
import { createAgendamento } from "../Mutations/createAgendamento.js";
import { createCliente } from "../Mutations/createCliente.js";
import { createQuadra } from "../Mutations/createQuadra.js";
import { getAgendamentosList } from "../Queries/getAgendamentos.js";
import { getClientesList } from "../Queries/getClientes.js";
import { getQuadrasList } from "../Queries/getQuadras.js";
import { deleteQuadra } from "../Mutations/deleteQuadra.js";
import { deleteAgendamento } from "../Mutations/deleteAgendamento.js";
import { deleteCliente } from "../Mutations/deleteCliente.js";

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
    createQuadra,
    deleteAgendamento,
    deleteCliente,
    deleteQuadra,
  },
};
