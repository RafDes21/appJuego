import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constans";

import { styles } from "./styles";

const StartGame = ({onHandleStartGame}) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [seletedNumber, setSeletedNumber] = useState(null);

  const onHandlerChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const onHandlerReset = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const onHandlerConfirm = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("numero invalido", "el numero tiene que estar entre 1 y 99", [
        { text: "Entendido", style: "destructive", onPress: onHandlerReset },
      ]);
    } else {
      setConfirmed(true);
      setSeletedNumber(chosenNumber);
      setEnteredValue("");
    }
  };

  const onhandleStartGame = () => {
    onHandleStartGame(seletedNumber)
  };

  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Numero Seleccionado</Text>
        <NumberContainer number={seletedNumber} />
        <Button
          title="Iniciar Juego"
          onPress={onhandleStartGame}
          color={colors.primary}
        />
      </Card>
    ) : null;

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
            <Button
              title="Reiniciar"
              onPress={onHandlerReset}
              color="#78BCE3"
            />
            <Button
              title="Confirmar"
              onPress={onHandlerConfirm}
              color="#185477"
            />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
