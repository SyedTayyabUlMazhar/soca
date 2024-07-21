import NavigationRoutes from "@Navigator/NavigationRoutes";
import { navigate } from "@Service/navigationService";
import { useRef } from "react";
import { ForgotPasswordPayload } from "./types";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@Api/Auth";

export default function useForgotPasswordContainer() {
  const refForm = useRef();

  const {mutate: forgotPasswordMutate,isLoading:forgotPasswordLoading} = useMutation(forgotPassword, {
    onSuccess: (data, payload) => {
      console.log(data,"This is data from forgot Password");
      
      navigate(NavigationRoutes.AUTH_STACK.OTP, {
        payload
      });
    },
  });

  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();
    if (data != null) {
      let payload: ForgotPasswordPayload = {
        parentId: data?.parentId,
      };
      console.log(payload, "payload of Forgot Password");
      forgotPasswordMutate(payload);

    }
  };

  return {
    onSubmitForm,
    refForm,
    forgotPasswordLoading
  };
}
