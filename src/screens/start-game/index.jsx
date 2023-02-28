import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Card } from "../../components";

import { styles } from "./styles";

const StartGame = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const onHandlerChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g,""));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Escribe un numero</Text>
          <TextInput
            value={enteredValue}
            keyboardType="numeric"
            style={styles.input}
            placeholder="0"
            onChangeText={onHandlerChange}
            maxLength={2}
          />

          <View style={styles.buttonContainer}>
            <Button title="Reiniciar" onPress={() => null} color="#78BCE3" />
            <Button title="Confirmar" onPress={() => null} color="#185477" />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
