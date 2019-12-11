import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default GoalItem = props => {
  return (
    <View style={styles.card}>
      <Text>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 2
  }
});
