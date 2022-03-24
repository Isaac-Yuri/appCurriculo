import { View } from "react-native";
import { styles } from "./styles";

import Foto from "../Foto";
import BoxNomeEProfissao from "../BoxNomeEProfissao";
import BoxContatos from "../BoxContatos";
import ContainerInformacao from "../ContainerInformacao";
import TituloCinza from "../TituloCinza";
import Linha from "../Linha";

function Curriculo() {
  return (
    <View style={styles.curriculoContainer}>
      <Foto />
      <BoxNomeEProfissao />
      <BoxContatos />

      <ContainerInformacao>
        <TituloCinza>Formação</TituloCinza>
        <Linha />
      </ContainerInformacao>

      <ContainerInformacao>
        <TituloCinza>Experiência profissional</TituloCinza>
        <Linha />
      </ContainerInformacao>
    </View>
  );
}

export default Curriculo;
