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

const getNumberString = number => {
  if (number < 1000) {
    return `${number}`;
  }

  return `${Math.round(number / 100) / 10}k`;
};

const StatisticDisplay = ({ number, label }) => {
  return (
    <View style={styles.statistic}>
      <Text fontWeight="bold">{getNumberString(number)}</Text>
      <Text>{label}</Text>
    </View>
  );
};

const StatisticsDisplay = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={styles.container}>
      <StatisticDisplay number={stars} label="Stars" />
      <StatisticDisplay number={forks} label="Forks" />
      <StatisticDisplay number={reviews} label="Reviews" />
      <StatisticDisplay number={rating} label="Rating" />
    </View>
  );
};

export default StatisticsDisplay;
