import React from "react";
import { View, StyleSheet } from "react-native";
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

const ReviewItem = ({ rating, title, date, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View style={styles.ratingContainer}>
          <Text color="primary" fontWeight="bold">
            {rating}
          </Text>
        </View>
      </View>
      <View>
        <Text fontWeight="bold">{title}</Text>
        <DateDisplay date={date} />
        <View style={styles.textContainer}>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
