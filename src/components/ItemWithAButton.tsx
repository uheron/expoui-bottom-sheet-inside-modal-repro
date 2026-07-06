import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const ItemWithAButton = ({ item }: { item: string }) => {
  const [basicText, setBasicText] = useState(item);

  const onPress = () => {
    setBasicText(
      "Very long text that shows that scrollability does not account for longer text added when bottom sheet is already opened jhbsf weJRBW EFKWEJBRFW EFWKEJRBWD FSKDJBFWE RKJDBFW ERKWJEBRW FKSjdbfw ef",
    );
  };

  return (
    <View style={styles.row}>
      <Button title="Press me" onPress={onPress} />
      <Text>{basicText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 5,
  },
});
