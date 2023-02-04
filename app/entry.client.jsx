import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

function Client() {
  const client = new ApolloClient({
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    uri: "https://countries.trevorblades.com/",
  });

  return (
    <ApolloProvider client={client}>
      <RemixBrowser />
    </ApolloProvider>
  );
}

hydrate(<Client />, document);
