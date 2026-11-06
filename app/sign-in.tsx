import SignInForm from "@/components/sign-in-form";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]}>
      <SignInForm />
    </SafeAreaView>
  );
}
