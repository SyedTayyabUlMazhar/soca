import { verfiyOtp } from "@Api/Auth";
import NavigationRoutes from "@Navigator/NavigationRoutes";
import { navigate } from "@Service/navigationService";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function useOTPContainer(email: string | undefined) {
  const [otp, setOtp] = useState<number>();

  const {mutate: otpVerify} = useMutation(verfiyOtp, {
    onSuccess: (data, payload) => {
      console.log(data,"This is something");
      
      navigate(NavigationRoutes.AUTH_STACK.RESET_PASSWORD, {
        payload,
        data
      });
    },
  });
  // const verifyOtp = useVerifyOtp({
  //   onSuccess: () => {
  //     navigate(NavigationRoutes.AUTH_STACK.LOGIN, { otp, email });
  //   },
  // });
  return {
    otpVerify,
    setOtp,
  };
}
