import BottomSheetScrollableExample from "@/components/BottomSheetScrollableExample";
import { StyleSheet, View } from "react-native";

export default function Modal() {
  return (
    <View style={styles.container}>
      <BottomSheetScrollableExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});