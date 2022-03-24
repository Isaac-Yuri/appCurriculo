import { SafeAreaView } from "react-native";
import { styles } from "./style";
import Curriculo from "../components/Curriculo"; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Curriculo />
    </SafeAreaView>
  );
}
