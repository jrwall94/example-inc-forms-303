import LinkButton from "@/components/link-button";
import SignInForm from "@/components/sign-in-form";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View>
      <Text>Sign In:</Text>
      <SignInForm />
      <LinkButton path="./logged-in" text="Submit" />
    </View>
  );
}
