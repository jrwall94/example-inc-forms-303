import JobAppForm from "@/components/job-app-form";
import { Text, View } from "react-native";

export default function ApplicationsScreen() {
  return (
    <View>
      <Text>Apply for a job:</Text>
      <JobAppForm />
    </View>
  );
}
