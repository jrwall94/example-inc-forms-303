"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { z } from "zod";

import { global } from "@/styles/global";

import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";

const leaveReasons = [
  { label: "Vacation", value: "vacation" },
  { label: "Sick days", value: "sick" },
  { label: "Personal days", value: "personal" },
  { label: "Family", value: "family" },
  { label: "Bereavement", value: "bereavement" },
  { label: "Other", value: "other" },
];

export default function TimeOffForm() {
  const [showPicker, setShowPicker] = useState<"startDate" | "endDate" | null>(
    null,
  );
  const timeOffSchema = z.object({
    email: z.email("Please enter a valid email").trim(),
    name: z.string().trim().min(1, "Please enter your name"),
    startDate: z.date("Please choose a valid date"),
    endDate: z.date("Please choose a valid date"),
    reason: z.string().min(1, "Please enter the reason for your request"),
  });

  type TimeOffForm = z.infer<typeof timeOffSchema>;

  const onSubmit = () => {
    router.replace("/logged-in");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TimeOffForm>({
    resolver: zodResolver(timeOffSchema),
    defaultValues: {
      email: "",
      name: "",
      startDate: undefined,
      endDate: undefined,
      reason: "",
    },
    mode: "onSubmit",
  });

  return (
    <View style={global.container}>
      <Text style={global.title}>Time Off Request:</Text>
      <Text style={global.label}>Email:</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[global.input, errors.email && global.inputError]}
            value={value}
            onChangeText={onChange}
            placeholder="example@email.com"
          />
        )}
      />
      {errors.email && (
        <Text style={global.errorText}>{errors.email.message}</Text>
      )}
      <Text style={global.label}>Name:</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[global.input, errors.name && global.inputError]}
            value={value}
            onChangeText={onChange}
            placeholder="John Smith"
          />
        )}
      />
      {errors.name && (
        <Text style={global.errorText}>{errors.name.message}</Text>
      )}
      <View style={styles.rowBox}>
        <View>
          <Text style={global.label}>Start Date:</Text>
          <Controller
            control={control}
            name="startDate"
            render={({ field: { onChange, value } }) => (
              <View>
                <Pressable
                  onPress={() => setShowPicker("startDate")}
                  style={({ pressed }) => [
                    styles.dateButton,
                    pressed && global.buttonPressed,
                    errors.startDate && global.inputError,
                  ]}
                >
                  <Text style={styles.dateButtonText}>
                    {value ? value.toDateString() : "Choose a date"}
                  </Text>
                </Pressable>
                {showPicker == "startDate" && (
                  <DateTimePicker
                    value={value || new Date()}
                    mode="date"
                    display="default"
                    onValueChange={(event, selectedDate) => {
                      setShowPicker(null);
                      onChange(selectedDate);
                    }}
                    onDismiss={() => setShowPicker(null)}
                  />
                )}
              </View>
            )}
          />
          {errors.startDate && (
            <Text style={global.errorText}>{errors.startDate.message}</Text>
          )}
        </View>
        <View>
          <Text style={global.label}>End Date:</Text>
          <Controller
            control={control}
            name="endDate"
            render={({ field: { onChange, value } }) => (
              <View>
                <Pressable
                  onPress={() => setShowPicker("endDate")}
                  style={({ pressed }) => [
                    styles.dateButton,
                    pressed && global.buttonPressed,
                    errors.startDate && global.inputError,
                  ]}
                >
                  <Text style={styles.dateButtonText}>
                    {value ? value.toDateString() : "Choose a date"}
                  </Text>
                </Pressable>
                {showPicker == "endDate" && (
                  <DateTimePicker
                    value={value || new Date()}
                    mode="date"
                    display="default"
                    onValueChange={(event, selectedDate) => {
                      setShowPicker(null);
                      onChange(selectedDate);
                    }}
                    onDismiss={() => setShowPicker(null)}
                  />
                )}
              </View>
            )}
          />
          {errors.endDate && (
            <Text style={global.errorText}>{errors.endDate.message}</Text>
          )}
        </View>
      </View>
      <Text style={global.label}>Reason:</Text>
      <Controller
        control={control}
        name="reason"
        render={({ field: { onChange, value } }) => (
          <View>
            <Dropdown
              style={[styles.dropDown, errors.reason && global.inputError]}
              placeholderStyle={styles.placeholder}
              data={leaveReasons}
              labelField="label"
              valueField="value"
              placeholder="Select a reason:"
              value={value}
              onChange={(item) => onChange(item.value)}
            />
          </View>
        )}
      />
      {errors.reason && (
        <Text style={global.errorText}>{errors.reason.message}</Text>
      )}
      <Pressable
        style={({ pressed }) => [
          global.button,
          pressed && global.buttonPressed,
        ]}
        onPress={() => handleSubmit(onSubmit)()}
      >
        <Text style={global.buttonText}>Submit Request</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  dateButton: {
    alignItems: "center",
    backgroundColor: "grey",
    width: 140,
    borderRadius: 10,
    paddingVertical: 5,
    marginBottom: 25,
  },
  dateButtonText: {
    color: "white",
  },
  rowBox: {
    display: "flex",
    flexDirection: "row",
    gap: 50,
    marginTop: 10,
  },
  dropDown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  placeholder: {
    color: "gray",
    fontSize: 16,
  },
});
