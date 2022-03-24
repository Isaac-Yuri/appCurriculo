import { Text } from "react-native";
import { styles } from './style'

export default function Nome({ children }) {
  return <Text style={styles.nome}>{children}</Text>;
}
