import { Colors } from "@Theme/Colors";
import Metrics from "@Utility/Metrics";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sheet: {
    margin: 0,
    justifyContent: "flex-end",
  },
  handleIndicator: {
    backgroundColor: Colors.APP_BACKGROUND,
    width: Metrics.scale(42),
    height: Metrics.scale(6),
    borderRadius: 8,
    opacity: 0.2,
    marginTop: Metrics.verticalScale(24),
    marginBottom: Metrics.verticalScale(24),
    alignSelf: "center",
  },
  modalContainer: {
    backgroundColor: Colors.APP_BACKGROUND,
    borderRadius: Metrics.scale(15),
    paddingHorizontal: Metrics.scale(24),
    paddingVertical: Metrics.verticalScale(48),
    maxHeight: Metrics.screenHeight * 0.5,
    borderColor: Colors.ICE_BLUE,
    borderWidth:1
  },
  sheetContainer: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: Metrics.scale(15),
    borderTopRightRadius: Metrics.scale(24),
    paddingHorizontal: Metrics.scale(24),
    paddingBottom: Metrics.verticalScale(48),
    maxHeight: Metrics.screenHeight * 0.5
  },
});
export default styles;
