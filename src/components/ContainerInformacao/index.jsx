import { View, Text } from "react-native";
import { styles } from "./style";

export default function ContainerInformacao({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}
