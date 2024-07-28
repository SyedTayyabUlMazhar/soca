import { Colors } from "@Theme/index";
import Metrics from "@Utility/Metrics";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Metrics.scale(54),
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.Colors.ICE_BLUE,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Colors.APP_BACKGROUND,
    paddingHorizontal: Metrics.scale(14),
  },
  input: {
    marginStart: Metrics.scale(10),
    flex: 1,
    color: Colors.Colors.PLACE_HOLDER_GREY,
    fontSize: Metrics.scale(16),
  },
});
export default styles;
