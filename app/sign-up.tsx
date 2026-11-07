import SignUpForm from "@/components/sign-up-form";
import { Text } from "react-native";

import LinkButton from "@/components/link-button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]}>
      <SignUpForm />
    </SafeAreaView>
  );
}
