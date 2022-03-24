import { View, Text, Image } from "react-native";
import { styles } from "./style";

export default function Foto() {
  return (
    <View style={styles.fotoContainer}>
      <Image style={styles.foto} source={require('../../assets/foto.jpeg')} />
    </View>
  );
}
