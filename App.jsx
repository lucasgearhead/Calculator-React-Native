// Imports.
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import CalculatorButton from "./components/CalculatorButton"; // Import of the calculator button component
import CalculatorDisplay from "./components/CalculatorDisplay"; // Import of the calculator display component

// App.
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0"); // State for the value displayed in the calculator
  const [secValue, setSecValue] = useState("0"); // State for the second value displayed in the calculator

  // Calculates the result as functions are added and displays it in the second display.
  useEffect(() => {
    calculateResult(displayValue);
  }, [displayValue]); // Called every time displayValue is changed.

  // Function that checks the pressed button and calls other functions as needed.
  const handleButtonPress = (value) => {
    if (value === "=") {
      // If '=' was pressed
      calculateResult("=");
    } else if (value === "C") {
      // If 'CLEAR' was pressed
      clearDisplay();
    } else if (value === "<") {
      // If '<' was pressed
      if (displayValue.length === 1) {
        setDisplayValue("0"); // If there is a digit on the display, change it to 0.
      } else {
        setDisplayValue(displayValue.slice(0, -1)); // If not, delete the last digit.
      }
    } else {
      // Else, update value with the next digit
      setDisplayValue(displayValue === "0" ? value : displayValue + value);
    }
  };

  // Function to calculate the result
  const calculateResult = (condition) => {
    if (condition === "=") {
      try {
        setDisplayValue(eval(displayValue).toString()); // Evaluates the expression and displays the result in the main display
      } catch (error) {
        setDisplayValue("Error"); // In case of an error, displays "Error" in the main display
      }
    } else {
      try {
        setSecValue(eval(condition).toString()); // Evaluates the expression and displays the result in the second display
      } catch (error) {
        setSecValue(secValue); // In case of an error, keeps the current value in the second display
      }
    }
  };

  // Function to clear the display
  const clearDisplay = () => {
    setDisplayValue("0");
  };

  return (
    <View style={styles.container}>
      <CalculatorDisplay displayValue={displayValue} primary={true} />
      <CalculatorDisplay displayValue={secValue} primary={false} />
      <View style={styles.buttons}>
        <View style={styles.row}>
          <CalculatorButton
            title="CLEAR"
            onPress={() => handleButtonPress("C")}
            buttonStyle={styles.flexButton}
            textStyle={{
              color: "red",
            }}
          />
          <CalculatorButton
            title="<"
            onPress={() => handleButtonPress("<")}
            textStyle={{
              color: "green",
            }}
          />
          <CalculatorButton
            title="/"
            onPress={() => handleButtonPress("/")}
            textStyle={{
              color: "green",
            }}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton title="7" onPress={() => handleButtonPress("7")} />
          <CalculatorButton title="8" onPress={() => handleButtonPress("8")} />
          <CalculatorButton title="9" onPress={() => handleButtonPress("9")} />
          <CalculatorButton
            title="x"
            onPress={() => handleButtonPress("*")}
            textStyle={{
              color: "green",
            }}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton title="4" onPress={() => handleButtonPress("4")} />
          <CalculatorButton title="5" onPress={() => handleButtonPress("5")} />
          <CalculatorButton title="6" onPress={() => handleButtonPress("6")} />
          <CalculatorButton
            title="-"
            onPress={() => handleButtonPress("-")}
            textStyle={{
              color: "green",
            }}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton title="1" onPress={() => handleButtonPress("1")} />
          <CalculatorButton title="2" onPress={() => handleButtonPress("2")} />
          <CalculatorButton title="3" onPress={() => handleButtonPress("3")} />
          <CalculatorButton
            title="+"
            onPress={() => handleButtonPress("+")}
            textStyle={{
              color: "green",
            }}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            title="0"
            onPress={() => handleButtonPress("0")}
            buttonStyle={styles.flexButton}
          />
          <CalculatorButton title="." onPress={() => handleButtonPress(".")} />
          <CalculatorButton
            title="="
            onPress={() => handleButtonPress("=")}
            buttonStyle={{
              backgroundColor: "green",
            }}
          />
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centers content horizontally
    backgroundColor: "#090909", // Background color for the container
    height: "100%", // Occupies full height of its container
    justifyContent: "space-around", // Distributes content with equal space around items
  },
  buttons: {
    justifyContent: "center", // Centers content horizontally
    width: "100%", // Occupies full width of its container
  },
  row: {
    flexDirection: "row", // Arranges items in a row horizontally
  },
  flexButton: {
    flex: 4, // Takes up 4 times the space compared to other items in the same container
  },
});

export default Calculator;
