import { useAuth } from '@clerk/expo';
import { Link, Redirect } from 'expo-router';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export default function Index() {
  const { isLoaded, isSignedIn, signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <View style={styles.container}>
      <Text className="text-red-400">안녕하세요. </Text>
      <Link href={'/about'}>About screen link</Link>
      <Link href={'/contact'}>contact screen link</Link>
      <Image
        source={require('../../assets/images/icon.png')}
        style={{
          width: 200,
          height: 200,
          borderRadius: 20,
        }}
      />
      <Pressable onPress={() => void signOut()} style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Sign out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutButton: {
    marginTop: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#dc2626',
  },
  signOutButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
