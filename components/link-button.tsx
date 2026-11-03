import { Link, RelativePathString } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  path: RelativePathString;
  text: string;
};

export default function LinkButton({ path, text }: Props) {
  return (
    <Link href={path} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.link}>{text}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width: 100,
    alignItems: "center",
  },
});
