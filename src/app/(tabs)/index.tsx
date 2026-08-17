  import { useAuth } from "@clerk/expo";
  import { Pressable, StyleSheet, Text, View } from "react-native";

 export default function HomeScreen() {
    const { signOut } = useAuth();

    return (
      <View style={styles.container}>
        <Text>Home 홈 스크린 입니다.</Text>

        <Pressable
          onPress={() => void signOut()}
          style={styles.signOutButton}
        >
          <Text style={styles.signOutButtonText}>Sign out</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    signOutButton: {
      marginTop: 24,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 8,
      backgroundColor: "#dc2626",
    },
    signOutButtonText: {
      color: "#ffffff",
      fontWeight: "600",
    },
  });