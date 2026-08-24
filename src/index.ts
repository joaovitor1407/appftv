import { resolvers } from "./Resolver/resolvers.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./DataBase/data-source.js";
import { join } from "node:path";
import { readFileSync } from "node:fs";
import { error } from "node:console";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "schema.gql"),
  "utf-8",
);

async function main() {
  await db
    .initialize()
    .then(() => console.log("Banco inicializado com sucesso"))
    .catch((error) => console.log("Erro: " + error));

  const { url } = await startStandaloneServer(server, {
    listen: { port: 5432 },
  });

  console.log(`Server running on ${url}`);
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

main();
