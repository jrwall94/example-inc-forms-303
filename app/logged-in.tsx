import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoggedIn() {
  const { email } = useLocalSearchParams<{ email?: string }>();

  return (
    <SafeAreaView style={styles.screen} edges={["left", "right", "bottom"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileSection}>
          <Text style={styles.title}>
            {email ? `Welcome, ${email.split("@")[0]}` : "Your Profile"}
          </Text>
          <Text style={styles.subtitle}>
            Manage your employee information and time off.
          </Text>
        </View>
        <View style={styles.optionsSection}>
          <Text style={styles.sectionTitle}>Employee tools</Text>
          <Link href="./employee-info" asChild>
            <Pressable style={styles.optionButton}>
              <Text style={styles.optionButtonText}>
                Enter Employee Information
              </Text>
            </Pressable>
          </Link>
          <Link
            href={{
              pathname: "/time-off",
              params: email ? { email } : {},
            }}
            asChild
          >
            <Pressable style={styles.optionButton}>
              <Text style={styles.optionButtonText}>Request Time Off</Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4F7FC",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 28,
  },
  profileSection: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D8E5F8",
    borderRadius: 22,
    paddingVertical: 26,
    paddingHorizontal: 22,
    marginBottom: 18,
    backgroundColor: "#EAF2FF",
  },
  title: {
    color: "#172554",
    fontSize: 27,
    lineHeight: 34,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "#6B7A90",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  optionsSection: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E1E8F0",
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    gap: 12,
    shadowColor: "#183153",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    color: "#184CE7",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 2,
  },
  optionButton: {
    minHeight: 48,
    borderRadius: 10,
    backgroundColor: "#184CE7",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  optionButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },
});
