import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id, first) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id, first },
  });

  if (!data || !data.repository) {
    return {
      repository: null,
      reviews: null,
      loading,
      fetchMore: null,
      ...result,
    };
  }

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id,
        first,
      },
    });
  };

  const { reviews, ...repository } = data.repository;
  return {
    repository: repository,
    reviews: reviews ? reviews.edges.map((edge) => edge.node) : [],
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepository;
