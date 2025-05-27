import Icon from "@/components/Icon";
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
        headerTitleAlign: "center",
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
          headerStyle: {
            backgroundColor: COLORS["background-white"],
          },
          headerTitleStyle: [styles.headerTitle, { color: COLORS["primary"] }],
        }}
      />
      <Stack.Screen
        name="[id]"
        options={({ navigation }) => ({
          title: "Transaction Detail",
          headerStyle: {
            backgroundColor: COLORS["primary"],
          },
          headerLeft: () => (
            <View style={styles.headerAction}>
              <IconButton
                onPress={navigation.goBack}
                name="arrow-left"
                size={20}
                color={COLORS["text-white"]}
              />
            </View>
          ),
          headerTitleStyle: [
            styles.headerTitle,
            { color: COLORS["text-white"] },
          ],
        })}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerAction: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontWeight: FONT_WEIGHT.REGULAR,
    fontSize: 16,
  },
});
