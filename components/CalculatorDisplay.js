import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const CalculatorDisplay = ({ displayValue }) => {
  return (
    <View style={styles.display}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    backgroundColor: "#151515",
    padding: 10,
    width: "100%",
    height: "25%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  displayText: {
    fontSize: 70,
    color: "white",
  },
});

export default CalculatorDisplay;
