import { View, Text } from "react-native";
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
        <View style={styles.containerDescricao}>
          <Text style={styles.tituloBold}>Ensino médio completo</Text>
          <Text style={styles.subTitulo}>ECI Tercilio Teixeira da Cruz</Text>
        </View>
        <View style={styles.containerDescricao}>
          <Text style={styles.tituloBold}>Curso De Desenvolvimento web</Text>
          <Text style={styles.subTitulo}>GOV Paraiba</Text>
        </View>
      </ContainerInformacao>

      <ContainerInformacao>
        <TituloCinza>Experiência profissional</TituloCinza>
        <Linha />
        <View style={styles.containerDescricao}>
          <Text style={styles.tituloBold}>Projetos pessoais</Text>
          <Text style={styles.subTitulo}>Pode velos acessando o meu GitHub.</Text>
        </View>
      </ContainerInformacao>

    </View>
  );
}

export default Curriculo;
