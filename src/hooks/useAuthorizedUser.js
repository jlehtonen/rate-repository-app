import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = (includeReviews = false) => {
  const { data, loading } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews },
  });

  return {
    user: data ? data.authorizedUser : null,
    loading,
  };
};

export default useAuthorizedUser;
