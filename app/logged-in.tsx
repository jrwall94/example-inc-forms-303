import LinkButton from "@/components/link-button";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoggedIn() {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]}>
      <Text>Your Profile - Username</Text>
      <LinkButton path="./employee-info" text="Enter Employee Information" />
      <LinkButton path="./time-off" text="Request Time Off" />
    </SafeAreaView>
  );
}
