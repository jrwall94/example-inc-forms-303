import { global } from "@/styles/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";

const jobAppSchema = z.object({
  position: z
    .string()
    .trim()
    .min(2, "Please enter the position")
    .max(50, "Position must be at most 50 characters"),

  fullName: z
    .string()
    .trim()
    .min(5, "Full name must be at least 5 characters")
    .max(50, "Full name must be at most 50 characters"),

  email: z.string().trim().pipe(z.email("Please enter a valid email address")),

  phone: z
    .string()
    .trim()
    .regex(
      /^\d{10}$|^\d{3}[-.\s]\d{3}[-.\s]\d{4}$/,
      "Enter a valid 10-digit phone number",
    ),

  coverLetter: z
    .string()
    .trim()
    .min(20, "Please enter at least 20 characters")
    .max(1000, "Maximum 1000 characters"),
});

type JobAppFormValues = z.infer<typeof jobAppSchema>;

export default function JobAppForm() {
  const [success, setSuccess] = useState("");

  const { control, handleSubmit, formState } = useForm<JobAppFormValues>({
    resolver: zodResolver(jobAppSchema),
    mode: "onChange",
    defaultValues: {
      position: "",
      fullName: "",
      email: "",
      phone: "",
      coverLetter: "",
    },
  });

  function onValid(values: JobAppFormValues) {
    setSuccess(`Application for ${values.position} submitted successfully!`);
  }

  return (
    <View>
      <View style={global.field}>
        <Text style={global.label}>Position Applying For</Text>
        <Controller
          control={control}
          name="position"
          render={({ field, fieldState }) => (
            <TextInput
              style={[global.input, fieldState.error && global.inputError]}
              placeholder="e.g. Junior Developer"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {formState.errors.position && (
          <Text style={global.errorText}>
            {formState.errors.position.message}
          </Text>
        )}
      </View>

      <View style={global.field}>
        <Text style={global.label}>Full Name</Text>
        <Controller
          control={control}
          name="fullName"
          render={({ field, fieldState }) => (
            <TextInput
              style={[global.input, fieldState.error && global.inputError]}
              placeholder="Jane Lee"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {formState.errors.fullName && (
          <Text style={global.errorText}>
            {formState.errors.fullName.message}
          </Text>
        )}
      </View>

      <View style={global.field}>
        <Text style={global.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <TextInput
              style={[global.input, fieldState.error && global.inputError]}
              placeholder="jane@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {formState.errors.email && (
          <Text style={global.errorText}>{formState.errors.email.message}</Text>
        )}
      </View>

      <View style={global.field}>
        <Text style={global.label}>Phone Number</Text>
        <Controller
          control={control}
          name="phone"
          render={({ field, fieldState }) => (
            <TextInput
              style={[global.input, fieldState.error && global.inputError]}
              placeholder="403-555-1234"
              keyboardType="phone-pad"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {formState.errors.phone && (
          <Text style={global.errorText}>{formState.errors.phone.message}</Text>
        )}
      </View>

      <View style={global.field}>
        <Text style={global.label}>Why Are You Interested?</Text>
        <Controller
          control={control}
          name="coverLetter"
          render={({ field, fieldState }) => (
            <TextInput
              style={[
                global.input,
                global.textArea,
                fieldState.error && global.inputError,
              ]}
              placeholder="Tell us why you would be a good fit..."
              multiline
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {formState.errors.coverLetter && (
          <Text style={global.errorText}>
            {formState.errors.coverLetter.message}
          </Text>
        )}
      </View>

      <View style={global.documentSection}>
        <View style={global.field}>
          <Text style={global.label}>Resume</Text>
          <Text style={global.documentHint}>
            Attach your resume (PDF, DOC, or DOCX).
          </Text>
          <View style={global.documentAction}>
            <Text style={global.documentActionText}>+ Add Resume</Text>
            <Text style={global.documentMeta}>Resume attachment preview</Text>
          </View>
        </View>

        <View style={global.field}>
          <Text style={global.label}>Supporting Documents (Optional)</Text>
          <Text style={global.documentHint}>
            Include additional documents such as references or certificates.
          </Text>
          <View style={global.documentAction}>
            <Text style={global.documentActionText}>
              + Add Supporting Documents
            </Text>
            <Text style={global.documentMeta}>PDF, DOC, or DOCX</Text>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => handleSubmit(onValid)()}
        disabled={!formState.isValid}
        style={({ pressed }) => [
          global.button,
          !formState.isValid && global.buttonDisabled,
          pressed && formState.isValid && global.buttonPressed,
        ]}
      >
        <Text style={global.buttonText}>Submit Application</Text>
      </Pressable>

      {success ? <Text style={global.success}>{success}</Text> : null}
    </View>
  );
}
