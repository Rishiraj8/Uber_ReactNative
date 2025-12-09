import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404 - Not Found</Text>
      <Link href="/" style={styles.link}>
        Go to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: "blue",
  },
});