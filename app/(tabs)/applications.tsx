import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ApplicationsScreen() {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]}>
      <Text>Apply for a job:</Text>
    </SafeAreaView>
  );
}
