import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealsOverViewScreen({ navigation, route }) {
  const catId = route.params.categoryId;
  return (
    <View>
      <Text>Meals Overview Screen {catId}</Text>
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
