import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const CalculatorDisplay = ({ displayValue, primary }) => {
  const scrollViewRef = useRef(); // Create a reference for the ScrollView component

  useEffect(() => {
    // Automatically scrolls to the end of the content in the display whenever the displayValue changes
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [displayValue]); // Triggers the effect whenever the displayValue changes

  return (
    <View style={primary ? styles.display : styles.secDisplay}>
      {/* ScrollView to enable scrolling in case of long display content */}
      <ScrollView
        ref={scrollViewRef} // Assign the reference to the ScrollView
        horizontal // Allows horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hides the horizontal scroll indicator
      >
        {/* Text component displaying the calculator output */}
        <Text style={primary ? styles.displayText : styles.displaySubText}>
          {displayValue}
        </Text>
      </ScrollView>
    </View>
  );
};

// Styles for different aspects of the CalculatorDisplay
const styles = StyleSheet.create({
  display: {
    backgroundColor: "#090909", // Background color for the main display
    padding: 10, // Padding around the display
    width: "100%", // Full width
    height: "20%", // Occupies 20% of the available height
    alignItems: "flex-end", // Aligns the content to the right within the display
    justifyContent: "center", // Centers the content vertically within the display
  },
  secDisplay: {
    backgroundColor: "#090909", // Background color for the secondary display
    padding: 10, // Padding around the display
    width: "100%", // Full width
    height: "15%", // Occupies 15% of the available height
    alignItems: "flex-end", // Aligns the content to the right within the display
    justifyContent: "center", // Centers the content vertically within the display
  },
  displayText: {
    fontSize: 70, // Font size for the main display text
    color: "white", // Text color for the main display
    alignSelf: "center", // Centers the text horizontally within the display
  },
  displaySubText: {
    fontSize: 40, // Font size for the secondary display text
    color: "white", // Text color for the secondary display
    opacity: 0.7, // Opacity of the text
    alignSelf: "center", // Centers the text horizontally within the display
  },
});

export default CalculatorDisplay;
