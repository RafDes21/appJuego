import { StyleSheet } from "react-native";
import { colors } from "../../constans";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 20,
    color: colors.text,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    margingHorizontal: 20,
    paddingVertical: 20,
  },
  label: {
    fontSize: 15,
    paddingVertical: 5,
    textAlign: "center",
    color: "#212121",
  },
  input: {
    width: "100%",
    borderBottomColor: colors.secondary,
    minWidth: 70,
    fontSize: 22,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-around",
  },
  confirmedContainer: {
    width: "75%",
    height: 180,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  confirmedTitle: {
    fontSize: 16,
  },
});
