import TimeOffForm from "@/components/time-off-form";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TimeOff() {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]}>
      <TimeOffForm />
    </SafeAreaView>
  );
}
