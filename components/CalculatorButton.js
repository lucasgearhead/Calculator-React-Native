import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// CalculatorButton component that receives onPress function, title, buttonStyle, and textStyle as props
const CalculatorButton = ({ onPress, title, buttonStyle, textStyle }) => (
  // TouchableOpacity to create a pressable button that triggers the onPress function
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    {/* Text component displaying the button title */}
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

// Styles for the CalculatorButton
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#171717", // Background color of the button
    borderRadius: 5, // Button border radius
    paddingVertical: 20, // Vertical padding inside the button
    paddingHorizontal: 30, // Horizontal padding inside the button
    margin: 2, // Margin around the button
    flex: 1, // Takes full available space in its container
  },
  buttonText: {
    fontSize: 30, // Font size of the button text
    color: "white", // Color of the button text
  },
});

export default CalculatorButton;
