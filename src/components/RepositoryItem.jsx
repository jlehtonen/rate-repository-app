import React from "react";
import { View, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import Avatar from "./Avatar";
import BasicInfoDisplay from "./BasicInfoDisplay";
import StatisticsDisplay from "./StatisticsDisplay";
import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    display: "flex",
    marginBottom: 10,
  },
  avatarAndInfoContainer: { display: "flex", flexDirection: "row" },
});

const GitHubLink = ({ url }) => {
  const handlePress = () => {
    WebBrowser.openBrowserAsync(url);
  };

  return <Button label="Open in GitHub" onPress={handlePress} />;
};

const RepositoryItem = ({ item, showGitHubLink }) => {
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
      {showGitHubLink ? <GitHubLink url={item.url} /> : null}
    </View>
  );
};

export default RepositoryItem;
