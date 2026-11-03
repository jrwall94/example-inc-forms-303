import LinkButton from "@/components/link-button";
import { Text, View } from "react-native";

export default function LoggedIn() {
  return (
    <View>
      <Text>Your Profile - Username</Text>
      <LinkButton path="./employee-info" text="Enter Employee Information" />
      <LinkButton path="./time-off" text="Request Time Off" />
    </View>
  );
}
