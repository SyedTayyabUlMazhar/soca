import { Colors } from "@Theme/Colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxUnchecked: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: Colors.PLACEHOLDER_COLOR,
    borderRadius: 4,
  },

  checkboxCheckedIconContainer: {
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
