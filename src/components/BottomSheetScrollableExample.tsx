import BottomSheet from "@expo/ui/community/bottom-sheet";
import { useRef } from "react";
import { Button, FlatList, Text, View } from "react-native";

const DATA = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

export default function BottomSheetScrollableExample() {
  const sheetRef = useRef<BottomSheet>(null);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Open Bottom Sheet" onPress={() => sheetRef.current?.snapToIndex(0)} />

      <BottomSheet
        ref={sheetRef}
        snapPoints={["50%"]}
        index={-1}
        enablePanDownToClose
      >
        <FlatList
          nestedScrollEnabled
          style={{ flex: 1 }}
          data={DATA}
          keyExtractor={(item) => item}
          contentContainerStyle={{ padding: 24 }}
          renderItem={({ item }) => (
            <Text style={{ paddingVertical: 16 }}>{item}</Text>
          )}
        />
      </BottomSheet>
    </View>
  );
}
