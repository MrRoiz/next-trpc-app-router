"use client";

import { trpc } from "../trpc/_config/client/client";

const BackMessage = () => {
  const { data, isLoading, error } = trpc.test.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return <p>{data}</p>;
};

export default BackMessage;
