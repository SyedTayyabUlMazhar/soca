import { Colors, Fonts } from "@Theme/index";
import Metrics from "@Utility/Metrics";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btnText: {
        marginHorizontal: 10,
        ...Fonts.Medium(Fonts.Size.medium, Colors.Colors.BUTTON_LIGHT_GREY),
    },
    submitBtnStyle: {
        backgroundColor: Colors.Colors.DARK_BLUE,
        borderRadius: Metrics.verticalScale(5),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.Colors.BLACK,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 4,
        paddingVertical: Metrics.verticalScale(15),
        marginBottom: Metrics.verticalScale(25),
      },
      spinnerStyle:{ paddingVertical: 1, height: 'auto' }
});
export default styles;
