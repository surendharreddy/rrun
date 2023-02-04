import { gql, useQuery } from "@apollo/client";

const COUNTRIES_QUERY = gql`
  query GetCountries {
    countries {
      name
      native
      currency
      emoji
    }
  }
`;

export default function Index() {
  const { data } = useQuery(COUNTRIES_QUERY);

  return <div>{JSON.stringify(data)}</div>;
}
