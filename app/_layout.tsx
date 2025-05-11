import { COLORS, FONT_WEIGHT } from "@/constants/theme";
import useAppState from "@/hooks/useAppState";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

export default function RootLayout() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 0 } },
  });

  useAppState();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS["text-white"],
          headerTitleStyle: {
            fontWeight: FONT_WEIGHT.BOLD,
          },
        }}
      />
    </QueryClientProvider>
  );
}
