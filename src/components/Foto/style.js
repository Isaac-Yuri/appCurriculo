import { StyleSheet } from "react-native";

const tamanhoDaFoto = 250;

export const styles = StyleSheet.create({
  foto: {
    width: tamanhoDaFoto,
    height: tamanhoDaFoto,
    borderRadius: tamanhoDaFoto / 2,
  },
  fotoContainer: {
    margin: 25,
  },
});
