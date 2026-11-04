import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  title: {
    color: "#172554",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 8,
  },
  label: {
    color: "#1e293b",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#94a3b8",
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 6,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputError: {
    borderColor: "#dc2626",
    borderWidth: 2,
  },
  errorText: {
    color: "#dc2626",
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 10,
    marginTop: 12,
    paddingVertical: 14,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
