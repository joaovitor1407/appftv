import "reflect-metadata";
import { typeDefs } from "./schema/typeDefs.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./DataBase/data-source.js";
import { resolvers } from "./schema/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  try {
    await db.initialize();
    console.log("Banco inicializado");

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`Servidor inicializado em: ${url}`);
  } catch (error: any) {
    console.error("Erro principal" + error);
    if (error.errors) {
      console.error("Sub-erros:", error.errors);
    }
  }
}
main();
