// Importações
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import CalculatorButton from "./components/CalculatorButton";
import CalculatorDisplay from "./components/CalculatorDisplay";

//App
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonPress = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearDisplay();
    } else {
      setDisplayValue(displayValue === "0" ? value : displayValue + value);
    }
  };

  const calculateResult = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("0");
  };

  return (
    <View style={styles.container}>
      <CalculatorDisplay displayValue={displayValue} />
      <View style={styles.buttons}>
        <View style={styles.row}>
          <CalculatorButton
            title="AC"
            onPress={() => handleButtonPress("C")}
            buttonStyle={styles.clearButton}
          />
          <CalculatorButton title="/" onPress={() => handleButtonPress("/")} />
        </View>
        <View style={styles.row}>
          <CalculatorButton title="7" onPress={() => handleButtonPress("7")} />
          <CalculatorButton title="8" onPress={() => handleButtonPress("8")} />
          <CalculatorButton title="9" onPress={() => handleButtonPress("9")} />
          <CalculatorButton title="*" onPress={() => handleButtonPress("*")} />
        </View>
        <View style={styles.row}>
          <CalculatorButton title="4" onPress={() => handleButtonPress("4")} />
          <CalculatorButton title="5" onPress={() => handleButtonPress("5")} />
          <CalculatorButton title="6" onPress={() => handleButtonPress("6")} />
          <CalculatorButton title="-" onPress={() => handleButtonPress("-")} />
        </View>
        <View style={styles.row}>
          <CalculatorButton title="1" onPress={() => handleButtonPress("1")} />
          <CalculatorButton title="2" onPress={() => handleButtonPress("2")} />
          <CalculatorButton title="3" onPress={() => handleButtonPress("3")} />
          <CalculatorButton title="+" onPress={() => handleButtonPress("+")} />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            title="0"
            onPress={() => handleButtonPress("0")}
            buttonStyle={styles.zeroButton}
          />
          <CalculatorButton title="." onPress={() => handleButtonPress(".")} />
          <CalculatorButton title="=" onPress={() => handleButtonPress("=")} />
        </View>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#151515",
    height: "100%",
    justifyContent: "space-around",
  },
  buttons: {
    justifyContent: "center",
    width: "100%",
  },
  row: {
    flexDirection: "row",
  },
  clearButton: {
    flex: 7,
    backgroundColor: "red",
  },
  zeroButton: {
    flex: 4,
  },
});

export default Calculator;
