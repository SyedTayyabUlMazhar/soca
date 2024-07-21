import { Colors } from "@Theme/Colors";
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
  guestBtn:{
    width: "100%",
    alignSelf: "center",
    backgroundColor:Colors.TRANSPARENT,
    borderColor:Colors.ICE_BLUE,
    borderWidth:1
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
