import { Button, StyleSheet, View } from "react-native";

import BottomSheetScrollableExample from "@/components/BottomSheetScrollableExample";
import { Spacing } from "@/constants/theme";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <BottomSheetScrollableExample />
      <Button title="Open Modal" onPress={() => router.push("/modal")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: Spacing.one,
  },
  inner: {},
});
