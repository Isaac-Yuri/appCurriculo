import { View } from "react-native";
import { styles } from "./styles";

import Foto from "../Foto";
import BoxNomeEProfissao from "../BoxNomeEProfissao";
import BoxContatos from "../BoxContatos";
import ContainerInformacao from "../ContainerInformacao";

function Curriculo() {
  return (
    <View style={styles.curriculoContainer}>
      <Foto />
      <BoxNomeEProfissao />
      <BoxContatos />
      <ContainerInformacao />
    </View>
  );
}

export default Curriculo;
