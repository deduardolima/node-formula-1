import { FastifyInstance } from "fastify";
import { teams } from "../database";

export async function teamsRoutes(server: FastifyInstance) {
  server.get("/teams", async (request, response) => {
    return response.code(200).send({ teams });
  });

  server.get<{ Params: { id: string } }>(
    "/teams/:id",
    async (request, response) => {
      const id = parseInt(request.params.id);
      const team = teams.find((t) => t.id === id);

      if (!team) {
        return response.code(404).send({ message: "Team Not Found" });
      }
      return response.code(200).send({ team });
    }
  );
}
