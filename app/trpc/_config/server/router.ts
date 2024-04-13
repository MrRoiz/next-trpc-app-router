import { publicProcedure, router } from "./t";

export const appRouter = router({
  test: publicProcedure.query(() => "hellodah!"),
});

export type AppRouter = typeof appRouter;
