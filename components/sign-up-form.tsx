import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";
import { global } from "@/styles/global";

export default function SignUpForm() {
  const signUpSchema = z.object({
    fullName: z.string(),
    email: z.email("Please enter a valid email"),
    password: z.string().trim().min(8, "Min 8 characters"),
    confirmPassword: z.string().trim().min(8, "Min 8 characters")
  }).refine((value) => value.password === value.confirmPassword,
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }
  );

  type signUpFormData = z.infer<typeof signUpSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { fullName: "", email: "", password: "", confirmPassword: "" },
  });

  const router = useRouter();

  const onSubmit = ({ fullName, email, password, confirmPassword }: signUpFormData) => {
    router.push({
      pathname: "/logged-in",
      params: { fullName: fullName, email: email, password: password, confirmPassword: confirmPassword },
    });
  };

  return (
    <View style={global.container}>
      <Text style={global.title}>Sign Up</Text>

      <Text style={global.label}>Full Name</Text>
      <Controller
        control={control}
        name="fullName"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[global.input]}
            placeholder="Enter Full Name"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text style={global.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
          style={[global.input, errors.email && global.inputError]}
          placeholder="Enter Email"
          value={value}
          onChangeText={onChange}
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
            secureTextEntry
          />
        )}
        />

        {errors.password && (
          <Text style={global.errorText}>{errors.password.message}</Text>
        )}

      <Text style={global.label}>Confirm Password</Text>
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[global.input, errors.confirmPassword && global.inputError]}
            placeholder="Confirm Password"
            value={value}
            onChangeText={onChange}
            secureTextEntry
          />
        )}
        />

        {errors.confirmPassword && (
          <Text style={global.errorText}>{errors.confirmPassword.message}</Text>
        )}

      <Pressable
        style={({ pressed }) => [
          global.button,
          pressed && global.buttonPressed,
        ]}
        onPress={() => handleSubmit(onSubmit)()}
      >
        <Text style={global.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}
