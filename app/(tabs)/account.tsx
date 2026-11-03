import LinkButton from "@/components/link-button";
import { StyleSheet, Text, View } from "react-native";

export default function AccountScreen() {
  return (
    <View>
      <Text>Account</Text>
      <View style={styles.container}>
        <LinkButton path="../sign-in" text="Sign In" />
        <LinkButton path="../sign-up" text="Sign Up" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
