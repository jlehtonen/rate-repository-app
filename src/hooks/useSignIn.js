import { useMutation, useApolloClient } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async (username, password) => {
    const mutationResult = await mutate({ variables: { username, password } });
    authStorage.setAccessToken(mutationResult.data.authorize.accessToken);
    apolloClient.resetStore();
    return mutationResult;
  };

  return [signIn, result];
};

export default useSignIn;
