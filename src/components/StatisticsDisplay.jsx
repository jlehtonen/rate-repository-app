import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  statistic: { display: "flex", alignItems: "center" },
});

const getNumberString = (number) => {
  if (number < 1000) {
    return `${number}`;
  }

  return `${Math.round(number / 100) / 10}k`;
};

const StatisticDisplay = ({ number, label, testID }) => {
  return (
    <View style={styles.statistic}>
      <Text fontWeight="bold" testID={testID}>
        {getNumberString(number)}
      </Text>
      <Text>{label}</Text>
    </View>
  );
};

const StatisticsDisplay = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={styles.container}>
      <StatisticDisplay
        number={stars}
        label="Stars"
        testID="repository-stars"
      />
      <StatisticDisplay
        number={forks}
        label="Forks"
        testID="repository-forks"
      />
      <StatisticDisplay
        number={reviews}
        label="Reviews"
        testID="repository-reviews"
      />
      <StatisticDisplay
        number={rating}
        label="Rating"
        testID="repository-rating"
      />
    </View>
  );
};

export default StatisticsDisplay;
