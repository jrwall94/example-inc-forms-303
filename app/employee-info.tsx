import EmployeeInfoForm from "@/components/employee-info-form";
import { Text, View } from "react-native";

export default function EmployeeInfo() {
  return (
    <View>
      <Text>Employee Information:</Text>
      <EmployeeInfoForm />
    </View>
  );
}
