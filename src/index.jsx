import { useFonts } from "expo-font";
import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Header } from "./components";
import { Game, StartGame } from "./screens";

import { styles } from "./styles";
import { colors } from "./constans";

const App = () => {
  const [loaded] = useFonts({
    "Josefina-Bold": require("../assets/fonts/JosefinSans-Bold.ttf"),
    "Josefina-Light": require("../assets/fonts/JosefinSans-Light.ttf"),
    "Josefina-Regular": require("../assets/fonts/JosefinSans-Regular.ttf"),
  });
  const [userNumber, setUserNumber] = useState(null);

  const onHandleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const Content = () =>
    userNumber ? (
      <Game selectedNumber={userNumber} />
    ) : (
      <StartGame onHandleStartGame={onHandleStartGame} />
    );

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header title="Adivina el numero"  />
      <Content />
    </View>
  );
};

export default App;
