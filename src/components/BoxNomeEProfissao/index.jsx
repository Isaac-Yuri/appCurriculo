import { View } from "react-native";
import { styles } from "./style";
import Nome from "../Nome";
import TituloCinza from "../TituloCinza";

export default function BoxNomeEProfissao() {
  return (
    <View style={styles.container}>
      <Nome>Isaac Yuri</Nome>
      <TituloCinza style={{ textAlign: "center" }}>
        Estudante de programação
      </TituloCinza>
    </View>
  );
}
