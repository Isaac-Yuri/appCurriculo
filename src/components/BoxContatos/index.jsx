import { View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Feather } from "@expo/vector-icons";
import * as Linking from "expo-linking";

export const tamanhoDosIcones = 25;

export default function BoxContatos() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://github.com/Isaac-Yuri");
        }}
        style={styles.boxIcon}
      >
        <Feather name="github" size={tamanhoDosIcones} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://www.instagram.com/isaac_yuri.py/");
        }}
        style={styles.boxIcon}
      >
        <Feather name="instagram" size={tamanhoDosIcones} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://www.linkedin.com/in/isaac-yuri-a613b8217/");
        }}
        style={styles.boxIcon}
      >
        <Feather name="linkedin" size={tamanhoDosIcones} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://www.facebook.com/isaac.yuri.5/");
        }}
        style={styles.boxIcon}
      >
        <Feather name="facebook" size={tamanhoDosIcones} color="white" />
      </TouchableOpacity>
    </View>
  );
}
