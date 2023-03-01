import { StyleSheet } from "react-native";
import { colors } from "../../constans";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height:120,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    color: colors.black,
    fontFamily:"Italic",
  },
});
