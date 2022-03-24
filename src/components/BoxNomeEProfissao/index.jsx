import { View, Text } from "react-native";
import { styles } from "./style";
import Nome from "../Nome";
import Profissao from "../Profissao";

export default function BoxNomeEProfissao() {
  return (
    <View style={styles.container}>
      <Nome>Isaac Yuri</Nome>
      <Profissao>Estudante de Programação</Profissao>
    </View>
  );
}
