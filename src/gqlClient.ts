
import { createClient } from "urql";

const client = createClient({
  url: process.env.NEXT_PUBLIC_FAUNA_DOMAIN ? process.env.NEXT_PUBLIC_FAUNA_DOMAIN : "https://graphql.fauna.com/graphql",
  fetchOptions: () => {
    const token = process.env.NEXT_PUBLIC_FAUNA_TOKEN;
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});

export { client };