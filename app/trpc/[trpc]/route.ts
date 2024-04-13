import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../_config/server/router";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
