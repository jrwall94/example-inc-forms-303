import { global } from "@/styles/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";

const employeeSchema = z.object({
  fullName: z
    .string()
    .min(5, "Full name must be at least 5 characters")
    .max(50, "Full name must be at most 50 characters"),
  employeeId: z
    .string()
    .min(1, "Employee ID must be at least 1 characters")
    .max(10, "Employee ID must be at most 10 characters"),
  email: z.email("Invalid email format"),
  phone: z
    .string()
    .min(10, "Phone must be 10 digits")
    .refine((value) => value.replace(/\D/g, "").length === 10, {
      message: "Phone must be 10 digits",
    }),
  postalCode: z
    .string()
    .min(1, "Postal code is required")
    .max(7, "Postal code must be at most 7 characters"),
  department: z
    .string()
    .min(2, "Department must be at least 2 characters")
    .max(30, "Department must be at most 30 characters"),
});

type EmployeeFormValues = z.infer<typeof employeeSchema>;

type FieldProps = {
  label: string;
  icon: "person" | "id-card" | "mail" | "call" | "location" | "briefcase";
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  errorMessage?: string;
  placeholder?: string;
};

function Field({
  label,
  icon,
  value,
  onChangeText,
  onBlur,
  errorMessage,
  placeholder,
}: FieldProps) {
  const [focused, setFocused] = useState(false);
  const hasError = Boolean(errorMessage);

  return (
    <View style={global.field}>
      <Text style={global.label}>{label}</Text>
      <View
        style={[
          global.inputRow,
          focused && global.inputFocused,
          hasError && global.inputError,
        ]}
      >
        <Ionicons
          name={icon}
          size={18}
          color={hasError ? "#C62828" : focused ? "#184CE7" : "#6B7A90"}
        />
        <TextInput
          style={global.inputline}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#6B7A90"
          onFocus={() => setFocused(true)}
          onBlur={() => {
            onBlur();
            setFocused(false);
          }}
        />
      </View>
      {hasError ? <Text style={global.errorText}>{errorMessage}</Text> : null}
    </View>
  );
}

export default function EmployeeInfoForm() {
  const [success, setSuccess] = useState("");
  const { control, handleSubmit, formState } = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      employeeId: "",
      email: "",
      phone: "",
      postalCode: "",
      department: "",
    },
  });

  function onValid(values: EmployeeFormValues) {
    setSuccess(`Saved employee ${values.fullName} (${values.employeeId})`);
  }

  return (
    <View>
      <Controller
        control={control}
        name="fullName"
        render={({ field, fieldState }) => (
          <Field
            label="Full name"
            icon="person"
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            errorMessage={fieldState.error?.message}
            placeholder="Jane Lee"
          />
        )}
      />
      <Controller
        control={control}
        name="employeeId"
        render={({ field, fieldState }) => (
          <Field
            label="Employee ID"
            icon="id-card"
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            errorMessage={fieldState.error?.message}
            placeholder="E123"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <Field
            label="Email"
            icon="mail"
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            errorMessage={fieldState.error?.message}
            placeholder="jane@company.com"
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field, fieldState }) => (
          <Field
            label="Phone"
            icon="call"
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            errorMessage={fieldState.error?.message}
            placeholder="403-555-1234"
          />
        )}
      />
      <Controller
        control={control}
        name="postalCode"
        render={({ field, fieldState }) => (
          <Field
            label="Postal code"
            icon="location"
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            errorMessage={fieldState.error?.message}
            placeholder="T2G 4V1"
          />
        )}
      />
      <Controller
        control={control}
        name="department"
        render={({ field, fieldState }) => (
          <Field
            label="Department"
            icon="briefcase"
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            errorMessage={fieldState.error?.message}
            placeholder="IT Support"
          />
        )}
      />

      <Pressable
        onPress={() => {
          handleSubmit(onValid)();
        }}
        disabled={!formState.isValid}
        style={({ pressed }) => [
          global.button,
          !formState.isValid && global.buttonDisabled,
          pressed && formState.isValid && global.buttonPressed,
        ]}
      >
        <Text style={global.buttonText}>Submit employee</Text>
      </Pressable>

      {success ? <Text style={global.success}>{success}</Text> : null}
    </View>
  );
}
