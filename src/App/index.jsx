import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { styles } from "./style";
import Curriculo from "../components/Curriculo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollStyle}>
        <Curriculo />
      </ScrollView>
    </SafeAreaView>
  );
}
