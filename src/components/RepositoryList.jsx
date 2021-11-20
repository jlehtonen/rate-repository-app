import React from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: theme.colors.mainBg,
    marginBottom: 70,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

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
      ItemSeparatorComponent={ItemSeparator}
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
