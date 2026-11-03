import TimeOffForm from "@/components/time-off-form";
import { Text, View } from "react-native";

export default function TimeOff() {
  return (
    <View>
      <Text>Request Time Off:</Text>
      <TimeOffForm />
    </View>
  );
}
