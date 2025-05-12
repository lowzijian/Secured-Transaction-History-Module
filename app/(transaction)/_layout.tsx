import IconButton from "@/components/IconButton";
import { COLORS, FONT_WEIGHT } from "@/constants/theme";
import useAuthContext from "@/hooks/useAuthContext";
import { Redirect, Stack } from "expo-router";
import { View } from "react-native";

export default function ProtectedLayout() {
  const { isLoggedIn, isReady, onSignOut } = useAuthContext();

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
          headerLeft: () => (
            <View style={{ width: 24, height: 24 }}>
              <IconButton
                onPress={onSignOut}
                name="logout-variant"
                size={24}
                color={COLORS["text-white"]}
              />
            </View>
          ),
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
