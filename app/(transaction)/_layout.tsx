import { COLORS, FONT_WEIGHT } from "@/constants/theme";
import useAuthContext from "@/hooks/useAuthContext";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { isLoggedIn, isReady } = useAuthContext();

  if (!isReady) {
    // TODO: Add a loading screen
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS["text-white"],
        headerTitleStyle: {
          fontWeight: FONT_WEIGHT.BOLD,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Transaction History",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Transaction Detail",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
