import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>안녕하세요. </Text>
      <Link href={"/about"}>About screen link</Link>
      <Link href={"/contact"}>contact screen link</Link>
      <Image
        source={require("../../assets/images/icon.png")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 20
        }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
