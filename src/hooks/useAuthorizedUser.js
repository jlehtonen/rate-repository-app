import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = () => {
  const { data, loading } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
  });

  return {
    user: data ? data.authorizedUser : null,
    loading,
  };
};

export default useAuthorizedUser;
