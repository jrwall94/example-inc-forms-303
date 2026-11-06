import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#D5DEEA",
  },

  title: {
    color: "#172554",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7A90",
    marginBottom: 18,
  },
  field: {
    marginBottom: 14,
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
  inputline: {
    flex: 1,
    color: "#102033",
    fontSize: 16,
    paddingVertical: 10,
    marginLeft: 8,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D5DEEA",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    minHeight: 48,
  },

  inputFocused: {
    borderColor: "#184CE7",
  },
  inputError: {
    borderColor: "#dc2626",
    backgroundColor: "#FDECEC",
    borderWidth: 2,
  },
  errorText: {
    color: "#dc2626",
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    backgroundColor: "#184CE7",
    borderRadius: 10,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  success: {
    marginTop: 12,
    color: "#1B7A3A",
    fontWeight: "600",
    textAlign: "center",
  },
});
