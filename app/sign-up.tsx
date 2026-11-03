import SignUpForm from "@/components/sign-up-form";
import { Text, View } from "react-native";

import LinkButton from "@/components/link-button";

export default function SignUp() {
  return (
    <View>
      <Text>Sign Up:</Text>
      <SignUpForm />
      <LinkButton path="./logged-in" text="Submit" />
    </View>
  );
}
