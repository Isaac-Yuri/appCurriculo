import { StyleSheet } from "react-native";
import { tamanhoDosIcones } from "./index";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  boxIcon: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: tamanhoDosIcones,
    margin: 10,
  },
});
