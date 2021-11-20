import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const review = async (values) => {
    return await mutate({ variables: values });
  };

  return [review, result];
};

export default useReview;
