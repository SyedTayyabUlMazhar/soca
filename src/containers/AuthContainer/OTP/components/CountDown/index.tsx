import ResendButton from "@Component/ResendButton";
import React from "react";
import { View } from "react-native";

const CountDown = () => {
  const [count, setCount] = React.useState(59);
  const [showCount, setShowCount] = React.useState(true);
  React.useEffect(() => {
    if (showCount) {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev <= 0) {
            setShowCount(false);
            return 0;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showCount]);
  const toggleResend = async () => {
    setCount(59);
    setShowCount(true);
  };
  return (
    <View style={{ marginTop: 30 }}>
      <ResendButton
        text={"Did not receive code?"}
        btnText={"Resend"}
        isShowCount={showCount}
        resendOTPText={"Resend code in"}
        counter={`00:${count < 10 ? `0${count}` : count}`}
        toggleResend={toggleResend}
      />
    </View>
  );
};

export default CountDown;
