export const typeDefs = `#graphql
scalar Date


type Cliente {
  id: ID!
  nome: String
  email: String
}

type Agendamento {
  id: ID!
  startsAt: String!
  endsAt: String!
  quadraId: ID!
  clienteId: ID!
}

type Quadra {
  id: ID!
  nome: String
  tipo: String
}

type Query {
    getAgendamentosList: [Agendamento!]!
    getClientesList: [Cliente!]!
    getQuadrasList: [Quadra!]!
  }

input createClienteInput {
  nome: String!
  email: String!
}

input createQuadraInput {
  nome: String!
  tipo: String!
}

input createAgendamentoInput {
  startsAt: String!
  endsAt: String!
  email: String!
  nome: String!

}
  type Mutation {
    createAgendamento(data:createAgendamentoInput!): Agendamento!
    createCliente(data: createClienteInput!): Cliente!
    createQuadra(nome: String!, tipo: String!): Quadra!
    deleteAgendamento(id: ID!): Boolean!
    deleteCliente(id: ID!): Boolean!
    deleteQuadra(id: ID!): Boolean!
  }
`;
