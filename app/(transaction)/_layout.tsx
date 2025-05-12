import { COLORS, FONT_WEIGHT } from "@/constants/theme";
import useAuthContext from "@/hooks/useAuthContext";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
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
        }}
      />
    </Stack>
  );
}
