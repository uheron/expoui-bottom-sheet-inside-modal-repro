import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { ComponentProps } from "react";
import { Platform, useColorScheme } from "react-native";

export const commonModalOptions: ComponentProps<
  typeof Stack.Screen
>["options"] = {
  animation: Platform.select({
    android: "slide_from_bottom",
    native: "default",
  }),
  contentStyle: { backgroundColor: "white" },
  headerTintColor: "blue",
  headerTitleAlign: "center",
  headerTitleStyle: { color: "contrast" },
  presentation: "modal",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          options={{
            ...commonModalOptions,
            headerShadowVisible: false,
            headerTitle: "Modal",
            presentation: "fullScreenModal",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
