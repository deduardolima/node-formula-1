import fastify from "fastify";
import cors from "@fastify/cors";
import { teamsRoutes } from "./routes/teams";
import { driversRoutes } from "./routes/drivers";

const server = fastify({ logger: true });

server.register(cors, { origin: "*" });
server.register(teamsRoutes);
server.register(driversRoutes);

server.listen({ port: 3000 }, () => {
  console.log("Server running on http://localhost:3000");
});
