import EmployeeInfoForm from "@/components/employee-info-form";
import { global } from "@/styles/global";
import { ScrollView, Text, View } from "react-native";

export default function EmployeeInfo() {
  return (
    <View style={global.page}>
      <ScrollView contentContainerStyle={global.content}>
        <View style={global.card}>
          <Text style={global.title}>Employee Information</Text>
          <Text style={global.subtitle}>
            Fill all 6 fields. Submit stays disabled until the form is valid.
          </Text>
          <EmployeeInfoForm />
        </View>
      </ScrollView>
    </View>
  );
}
