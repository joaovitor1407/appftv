export const typeDefs = `#graphql
  scalar Date

  type Cliente {
    id: ID!
    nome: String
    
  }
  type Agendamento {
    id: ID!
    startsAt: Date!
    endsAt: Date!
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
  }
`;
