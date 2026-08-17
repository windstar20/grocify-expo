import { useAuth } from '@clerk/expo';
import { Link, Redirect } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
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
    <Redirect href="/(tabs)" />
    // <View style={styles.container}>
    //   <Text className="text-red-400">안녕하세요. </Text>
    //   <Link href={'/about'}>About screen link</Link>
    //   <Link href={'/contact'}>contact screen link</Link>
    //   <Image
    //     source={require('../../assets/images/icon.png')}
    //     style={{
    //       width: 200,
    //       height: 200,
    //       borderRadius: 20,
    //     }}
    //   />
    //   <Pressable onPress={() => void signOut()} style={styles.signOutButton}>
    //     <Text style={styles.signOutButtonText}>Sign out</Text>
    //   </Pressable>
    // </View>
  );
}

