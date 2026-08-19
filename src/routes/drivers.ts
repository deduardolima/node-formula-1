import { FastifyInstance } from "fastify";
import { drivers } from "../database";

interface DriverParams {
  id: string;
}

export async function driversRoutes(server: FastifyInstance) {
  server.get("/drivers", async (request, response) => {
    return response.type("application/json").code(200).send({ drivers });
  });

  server.get<{ Params: DriverParams }>(
    "/drivers/:id",
    async (request, response) => {
      const id = parseInt(request.params.id);
      const driver = drivers.find((d) => d.id === id);

      if (!driver) {
        return response
          .type("application/json")
          .code(404)
          .send({ message: "Driver Not Found" });
      }

      return response.type("application/json").code(200).send({ driver });
    }
  );

  server.get<{ Querystring: { team?: string } }>(
    "/drivers/search",
    async (request, response) => {
      const { team } = request.query;

      if (!team) {
        return response
          .code(400)
          .send({ message: "Query param 'team' is required" });
      }

      const result = drivers.filter((d) =>
        d.team.toLowerCase().includes(team.toLowerCase())
      );

      return response.code(200).send({ drivers: result });
    }
  );
}
