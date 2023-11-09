import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const CalculatorDisplay = ({ displayValue }) => {
  const scrollViewRef = useRef();

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [displayValue]);

  return (
    <View style={styles.display}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.displayText}>{displayValue}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    backgroundColor: "#090909",
    padding: 10,
    width: "100%",
    height: "25%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  displayText: {
    fontSize: 70,
    color: "white",
    alignSelf: "center",
  },
});

export default CalculatorDisplay;
