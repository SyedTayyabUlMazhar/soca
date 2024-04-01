import { Colors, Fonts } from "@Theme/index";
import Metrics from "@Utility/Metrics";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    marginTop: Metrics.verticalScale(35),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",

  },
  textCenter: {
    textAlign: "center",
    ...Fonts.Medium(Fonts.Size.xxLarge, Colors.Colors.WHITE),
    marginHorizontal: 20,
  },
  desc: {
    textAlign: "center",
    color: Colors.Colors.WARM_GREY,
    ...Fonts.Regular(Fonts.Size.medium, Colors.Colors.WHITE),
    marginTop: Metrics.verticalScale(5),
  },
});
export default styles;
