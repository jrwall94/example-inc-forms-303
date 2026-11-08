import SignInForm from "@/components/sign-in-form";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]}>
      <View>
        <SignInForm />
        <View style={styles.signUpSection}>
          <Text style={styles.prompt}>Don&apos;t have an account already?</Text>
          <Link href="/sign-up" asChild>
            <Pressable style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Sign up</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signUpSection: {
    marginHorizontal: 24,
    marginTop: 4,
    padding: 18,
    borderWidth: 1,
    borderColor: "#D8E5F8",
    borderRadius: 16,
    backgroundColor: "#EAF2FF",
    alignItems: "center",
  },
  prompt: {
    color: "#475569",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  signUpButton: {
    minHeight: 46,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#184CE7",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
