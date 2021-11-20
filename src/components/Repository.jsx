import React from "react";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import { FlatList, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    display: "flex",
    flexDirection: "row",
  },
  leftSide: {
    marginRight: 10,
  },
  ratingContainer: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 100,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: 280,
    marginTop: 3,
  },
  list: {
    marginBottom: 73,
    backgroundColor: theme.colors.mainBg,
  },
  separator: {
    height: 10,
  },
});

const DateDisplay = ({ date }) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  return (
    <Text color="textSecondary">
      {day}.{month}.{year}
    </Text>
  );
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View style={styles.ratingContainer}>
          <Text color="primary" fontWeight="bold">
            {review.rating}
          </Text>
        </View>
      </View>
      <View>
        <Text fontWeight="bold">{review.user.username}</Text>
        <DateDisplay date={review.createdAt} />
        <View style={styles.textContainer}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const Repository = () => {
  const { id } = useParams();
  const { repository, reviews, loading } = useRepository(id);

  if (loading) {
    return null;
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} showGitHubLink />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
    />
  );
};

export default Repository;
