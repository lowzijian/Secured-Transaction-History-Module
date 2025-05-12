import AuthContextProvider from "@/context/AuthProvider";
import useAppState from "@/hooks/useAppState";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";

export default function RootLayout() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 0 } },
  });

  useAppState();

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
