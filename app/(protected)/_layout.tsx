import { COLORS, FONT_WEIGHT } from "@/constants/theme";
import { Stack } from "expo-router";

export default function ProtectedLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS["text-white"],
        headerTitleStyle: {
          fontWeight: FONT_WEIGHT.BOLD,
        },
      }}
    />
  );
}
