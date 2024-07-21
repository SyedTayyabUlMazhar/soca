import Metrics from "@Utility/Metrics";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  forgotText: {
    alignSelf: "flex-start",
    marginTop: Metrics.verticalScale(25),
  },
  appBtnStyle: {
    width: "100%",
    alignSelf: "center",
  },
  innerWrapper: {
    width: "100%",
    justifyContent: "space-between",
    flex: 1
  },
  container:{
    marginBottom: 0,
    marginTop: Metrics.scale(40)
  }
});
export default styles;
