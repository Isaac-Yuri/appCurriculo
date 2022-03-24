import { Text } from "react-native";
import { styles } from "./style";

export default function Profissao({ children }) {
  return <Text style={styles.profissao}>{children}</Text>;
}
