import React, { Component, useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export default GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const inputGoalHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.box}>
      <TextInput
        placeholder="Enter your goal here"
        style={styles.textinput}
        onChangeText={inputGoalHandler}
        value={enteredGoal}
      />
      <Button
        title="Add goal"
        onPress={props.onAddGoal.bind(this, enteredGoal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "black"
  },

  box: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
