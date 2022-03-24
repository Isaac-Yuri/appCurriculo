import { View, Text } from "react-native";
import { styles } from "./style";

import TituloCinza from "../TituloCinza";

export default function ContainerInformacao() {
  return (
    <View style={styles.container}>
      <TituloCinza>formação</TituloCinza>
    </View>
  );
}
