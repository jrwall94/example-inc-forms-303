import JobAppForm from "@/components/job-app-form";
import { global } from "@/styles/global";
import { ScrollView, Text, View } from "react-native";

export default function ApplicationsScreen() {
  return (
    <View>
      <ScrollView contentContainerStyle={global.content}>
        <View style={global.card}>
          <Text style={global.title}>Job Application</Text>
          <Text style={global.subtitle}>
            Complete the form below to submit your job application.
          </Text>
          <JobAppForm />
        </View>
      </ScrollView>
    </View>
  );
}
