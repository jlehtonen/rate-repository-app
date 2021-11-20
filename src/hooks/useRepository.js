import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });

  if (!data) {
    return { repository: null, reviews: null, loading };
  }

  const { reviews, ...repository } = data.repository;
  return {
    repository: repository,
    reviews: reviews.edges.map((edge) => edge.node),
    loading,
  };
};

export default useRepository;
