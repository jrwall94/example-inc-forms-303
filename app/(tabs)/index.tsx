import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]}>
      <Text>Home</Text>
      <Text>Welcome to Example Industries Incorporated</Text>
      <Text>
        Employees: In order to enter your information or request time off,
        please sign in. If you do not already have an account, please sign up.
      </Text>
    </SafeAreaView>
  );
}
