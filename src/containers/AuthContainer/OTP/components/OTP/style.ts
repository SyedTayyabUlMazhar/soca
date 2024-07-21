import { Colors, Fonts } from "@Theme/index";
import Metrics from "@Utility/Metrics";
import Utils from "@Utility/Utils";
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cellText: {
        textAlign: "center",
        ...Fonts.Medium(Fonts.Size.xxxLarge, Colors.Colors.DARK),
        borderRadius: Metrics.scale(10),
      },
      codeFieldRoot: {
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: Metrics.scale(10),
        marginHorizontal: Utils.isPlatformAndroid() ? Metrics.scale(10) : Metrics.scale(0),
        marginLeft: "auto",
        marginRight: "auto",
      },
      cell: {
        height: Metrics.scale(65),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: Metrics.scale(15),
        overflow: "hidden",
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: Colors.Colors.OTP_BG_COLOR,
        flex:1,
        marginHorizontal:Metrics.scale(15)
      },
});
export default styles;
