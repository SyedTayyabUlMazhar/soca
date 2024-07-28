import { Colors } from "@Theme/Colors";
import Fonts from "@Theme/Fonts";
import Metrics from "@Utility/Metrics";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outline: {
    borderWidth: 1,
    borderRadius: 8,
    height: Metrics.verticalScale(54),
    paddingHorizontal: Metrics.scale(16),
    flexDirection: "row",
    alignItems: "center",
  },
  outlineActive: {
    borderColor: Colors.ICE_BLUE,
  },
  outlineInActive: {
    borderColor: Colors.GREY,
  },

  text: {
    fontFamily: Fonts.FontFamily.default,
    fontSize: Metrics.scale(16),
    marginStart: 4,
  },
  textActive: {
    color: Colors.ICE_BLUE,
  },
  textInActive: {
    color: Colors.GREY,
  },
});
export default styles;
