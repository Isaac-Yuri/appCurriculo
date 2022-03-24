import { Text } from "react-native";
import { styles } from "./style";

export default function TituloCinza({ children }) {
  return <Text style={styles.titulo}>{children}</Text>;
}
