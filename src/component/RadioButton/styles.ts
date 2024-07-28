import { Colors } from "@Theme/Colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  radioButtonUnchecked: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 999,
    padding: 3,
  },

  radioButtonInnerCircle: {
    padding: 4,
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 999,
  },
});
