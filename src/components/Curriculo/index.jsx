import { View } from "react-native";
import { styles } from "./styles";

import Foto from "../Foto";
import BoxNomeEProfissao from "../BoxNomeEProfissao";

function Curriculo() {
  return (
    <View style={styles.curriculoContainer}>
      <Foto />
      <BoxNomeEProfissao />
    </View>
  );
}

export default Curriculo;
