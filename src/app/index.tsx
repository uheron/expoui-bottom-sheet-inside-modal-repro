import BottomSheetScrollableExample from "@/components/BottomSheetScrollableExample";
import { FlatList, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Bottom sheet by itself
      </Text>
      <BottomSheetScrollableExample />

      <FlatList
        ListHeaderComponent={() => (
          <>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Bottom sheet inside flatlist
            </Text>
            <BottomSheetScrollableExample />
          </>
        )}
        data={Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`)}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}
