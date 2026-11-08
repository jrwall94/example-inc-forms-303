import TimeOffForm from "@/components/time-off-form";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TimeOff() {
  const { email } = useLocalSearchParams<{ email?: string }>();

  return (
    <SafeAreaView edges={["left", "right", "bottom"]}>
      <TimeOffForm initialEmail={email ?? ""} />
    </SafeAreaView>
  );
}
