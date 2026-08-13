import { Stack } from 'expo-router';

interface ComponentProps {}

export default function Component(props: ComponentProps) {
  return <Stack screenOptions={{headerShown: false}} />;
};
