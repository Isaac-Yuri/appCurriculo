import { View } from "react-native";
import { styles } from "./styles";

import Foto from "../Foto";
import BoxNomeEProfissao from "../BoxNomeEProfissao";
import BoxContatos from "../BoxContatos";

function Curriculo() {
  return (
    <View style={styles.curriculoContainer}>
      <Foto />
      <BoxNomeEProfissao />
      <BoxContatos />
    </View>
  );
}

export default Curriculo;
