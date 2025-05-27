import IconButton from "@/components/IconButton";
import { COLORS, FONT_WEIGHT } from "@/constants/theme";
import useAuthContext from "@/hooks/useAuthContext";
import { Redirect, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

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
          title: "Transactions History",
          headerLeft: () => (
            <View style={styles.headerAction}>
              <IconButton
                onPress={onSignOut}
                name="arrow-left"
                size={20}
                color={COLORS["primary"]}
              />
            </View>
          ),
          headerStyle: styles.header,
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerTitle,
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

const styles = StyleSheet.create({
  headerAction: {
    width: 20,
    height: 20,
  },
  header: {
    backgroundColor: COLORS["background-white"],
  },
  headerTitle: {
    fontWeight: FONT_WEIGHT.REGULAR,
    fontSize: 16,
    color: COLORS["primary"],
    textAlign: "center",
  },
});
