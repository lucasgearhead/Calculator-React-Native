// Importações
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

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
    } else if (value === "<") {
      if (displayValue.length === 1) {
        setDisplayValue("0");
      } else {
        setDisplayValue(displayValue.slice(0, -1));
      }
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

// Estilos
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#090909",
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
  flexButton: {
    flex: 4,
  },
});

export default Calculator;
