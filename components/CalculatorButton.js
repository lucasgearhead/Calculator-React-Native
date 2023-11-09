import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CalculatorButton = ({ onPress, title, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#171717",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 30,
    margin: 2,
    flex: 1,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
});

export default CalculatorButton;
