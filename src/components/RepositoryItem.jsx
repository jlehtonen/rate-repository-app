import React from "react";
import { View, StyleSheet } from "react-native";
import Avatar from "./Avatar";
import BasicInfoDisplay from "./BasicInfoDisplay";
import StatisticsDisplay from "./StatisticsDisplay";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    display: "flex",
  },
  avatarAndInfoContainer: { display: "flex", flexDirection: "row" },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarAndInfoContainer}>
        <Avatar url={item.ownerAvatarUrl} />
        <BasicInfoDisplay
          fullName={item.fullName}
          description={item.description}
          language={item.language}
        />
      </View>

      <StatisticsDisplay
        stars={item.stargazersCount}
        forks={item.forksCount}
        reviews={item.reviewCount}
        rating={item.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
