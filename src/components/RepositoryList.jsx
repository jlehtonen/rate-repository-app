import React from "react";
import { FlatList, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBg,
    marginBottom: 70,
  },
});

const RepositoryListItem = ({ item, navigate }) => {
  const handlePress = () => {
    navigate(`/repositories/${item.id}`);
  };
  return (
    <Pressable onPress={handlePress}>
      <RepositoryItem item={item} />
    </Pressable>
  );
};

export const RepositoryListContainer = ({ repositories, navigate }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => (
        <RepositoryListItem item={item} navigate={navigate} />
      )}
      style={styles.container}
    />
  );
};

const RepositoryList = () => {
  const navigate = useNavigate();
  const { repositories } = useRepositories();
  return (
    <RepositoryListContainer repositories={repositories} navigate={navigate} />
  );
};

export default RepositoryList;
