import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const CalculatorDisplay = ({ displayValue, primary }) => {
  const scrollViewRef = useRef();

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [displayValue]);

  return (
    <View style={primary ? styles.display : styles.secDisplay}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Text style={primary ? styles.displayText : styles.displaySubText}>
          {displayValue}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    backgroundColor: "#090909",
    padding: 10,
    width: "100%",
    height: "20%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  secDisplay: {
    backgroundColor: "#090909",
    padding: 10,
    width: "100%",
    height: "15%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  displayText: {
    fontSize: 70,
    color: "white",
    alignSelf: "center",
  },
  displaySubText: {
    fontSize: 40,
    color: "white",
    opacity: 0.7,
    alignSelf: "center",
  },
});

export default CalculatorDisplay;
