import NavigationRoutes from "@Navigator/NavigationRoutes";
import { navigate } from "@Service/navigationService";
import { Colors } from "@Theme/index";
import Metrics from "@Utility/Metrics";
import React, { useEffect } from "react";
import { Animated, Platform, SafeAreaView, Text } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import styles from "./style";
import Utils from "@Utility/Utils";
import useOTPContainer from "../OTPContainer";

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 4;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }: any) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

interface IOTP {
  value?: any;
  setValue?: any;
  email?:string
}
const OTP = ({ setValue, value,email }: IOTP) => {

const {setOtp,otpVerify}=useOTPContainer(email)

  
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  console.log(value,'valuevaluevaluevaluevalue');
  
  useEffect(() => {
    const payload={
      otp:value,
      parentID:email,
    }
    setOtp(value)
  if (value?.length == CELL_COUNT) {
    console.log(payload,"Thisis it");
    
       otpVerify(payload)
   
    }
  }, [value]);

  const renderCell = ({ index, symbol, isFocused }: any) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      borderColor: hasValue
        ? animationsScale[index].interpolate({
          inputRange: [0, 1],
          outputRange: [
            Colors.Colors.OTP_BG_COLOR,
            Colors.Colors.OTP_BG_COLOR,
          ],
        })
        : animationsColor[index].interpolate({
          inputRange: [0, 1],
          outputRange: [
            Colors.Colors.OTP_BG_COLOR,
            Colors.Colors.OTP_BORDER_COLOR,
          ],
        }),
    };

    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[
          styles.cell,
          animatedCellStyle,
          Utils.isPlatformIOS() && { paddingTop: Metrics.scale(10) },
        ]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        <Text style={styles.cellText}>
          {symbol || (isFocused ? <Cursor cursorSymbol="I" /> : null)}
        </Text>
      </AnimatedText>
    );
  };

  return (
    <SafeAreaView>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete="sms-otp"
        renderCell={renderCell}
      />
    </SafeAreaView>
  );
};

export default OTP;
