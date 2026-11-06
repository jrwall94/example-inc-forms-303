import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";

import { global } from "@/app/styles/global";

export default function SignInForm() {
  const signInSchema = z.object({
    email: z.email("Please enter a valid email"),
    password: z.string().trim().min(8, "min 8 characters"),
  });

  type signInFormData = z.infer<typeof signInSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const router = useRouter();

  const onSubmit = () => {
    router.replace("/logged-in");
  };

  return (
    <View style={global.container}>
      <Text style={global.title}>Enter Email and Password</Text>

      <Text style={global.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[global.input, errors.email && global.inputError]}
            placeholder="Email@Example.com"
            value={value}
            onChangeText={onChange}
            secureTextEntry
          />
        )}
      />
      {errors.email && (
        <Text style={global.errorText}>{errors.email.message}</Text>
      )}
      <Text style={global.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[global.input, errors.password && global.inputError]}
            placeholder="Enter Password"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && (
        <Text style={global.errorText}>{errors.password.message}</Text>
      )}
      <Pressable
        style={({ pressed }) => [
          global.button,
          pressed && global.buttonPressed,
        ]}
        onPress={() => handleSubmit(onSubmit)()}
      >
        <Text style={global.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
}
