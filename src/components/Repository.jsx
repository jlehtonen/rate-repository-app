import React from "react";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import { FlatList, StyleSheet, View } from "react-native";
import theme from "../theme";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  list: {
    marginBottom: 73,
    backgroundColor: theme.colors.mainBg,
  },
  separator: {
    height: 10,
  },
});

const Repository = () => {
  const { id } = useParams();
  const { repository, reviews, loading, fetchMore } = useRepository(id, 4);

  if (loading) {
    return null;
  }

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem
          rating={item.rating}
          title={item.user.username}
          date={item.createdAt}
          text={item.text}
        />
      )}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} showGitHubLink />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.1}
    />
  );
};

export default Repository;
