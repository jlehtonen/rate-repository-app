import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useAuthorizedUser from "../hooks/useAuthorizedUser";
import ReviewItem from "./ReviewItem";
import theme from "../theme";

const styles = StyleSheet.create({
  list: {
    marginBottom: 73,
    backgroundColor: theme.colors.mainBg,
  },
  separator: {
    height: 10,
  },
});

const MyReviews = () => {
  const { user } = useAuthorizedUser(true);

  if (!user) {
    return null;
  }

  return (
    <FlatList
      data={user.reviews.edges.map((edge) => edge.node)}
      renderItem={({ item }) => (
        <ReviewItem
          rating={item.rating}
          title={item.repository.fullName}
          date={item.createdAt}
          text={item.text}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
    />
  );
};

export default MyReviews;
