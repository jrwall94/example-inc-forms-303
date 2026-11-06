import { global } from "@/styles/global";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["left", "right", "bottom"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.companySection}>
          <Text style={[global.title, styles.title]}>
            Example Industries Incorporated
          </Text>
          <Text style={[global.subtitle, styles.subtitle]}>
            Letting you fill out forms since 2026
          </Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={[global.label, styles.label]}>Prospects</Text>
          <Text style={styles.bodyText}>
            Submit your information in the Applications tab and wait to hear
            back from our team!
          </Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={[global.label, styles.label]}>Employees</Text>
          <Text style={styles.bodyText}>
            Please sign in using the Accounts tab to enter your information or
            request time off.
          </Text>
          <Text style={[styles.bodyText, styles.paragraph]}>
            If you do not already have an account, please sign up.
          </Text>
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
  companySection: {
    borderWidth: 1,
    borderColor: "#D8E5F8",
    borderRadius: 22,
    paddingVertical: 26,
    paddingHorizontal: 22,
    marginBottom: 18,
    backgroundColor: "#EAF2FF",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 27,
    lineHeight: 34,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    lineHeight: 21,
    marginBottom: 0,
  },
  infoSection: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E1E8F0",
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    marginBottom: 14,
    shadowColor: "#183153",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    color: "#184CE7",
    fontSize: 17,
    marginBottom: 8,
  },
  bodyText: {
    color: "#475569",
    fontSize: 15,
    lineHeight: 22,
  },
  paragraph: {
    marginTop: 10,
  },
});
