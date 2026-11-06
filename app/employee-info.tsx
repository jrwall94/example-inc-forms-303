import EmployeeInfoForm from "@/components/employee-info-form";
import { global } from "@/styles/global";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmployeeInfo() {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]}>
      <ScrollView contentContainerStyle={global.content}>
        <View style={global.card}>
          <Text style={global.title}>Employee Information</Text>
          <Text style={global.subtitle}>
            Fill all 6 fields. Submit stays disabled until the form is valid.
          </Text>
          <EmployeeInfoForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
