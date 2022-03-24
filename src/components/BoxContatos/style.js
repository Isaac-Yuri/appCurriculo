import { StyleSheet } from "react-native";
import { tamanhoDosIcones } from ".";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  boxIcon: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: tamanhoDosIcones,
    margin: 10,
  },
});
