import LinkButton from "@/components/link-button";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountScreen() {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]}>
      <Text>Account</Text>
      <View style={styles.container}>
        <LinkButton path="../sign-in" text="Sign In" />
        <LinkButton path="../sign-up" text="Sign Up" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
