import NavigationRoutes from "@Navigator/NavigationRoutes";
import { navigate } from "@Service/navigationService";
import { useRef } from "react";
import { ForgotPasswordPayload } from "./types";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@Api/Auth";

export default function useForgotPasswordContainer() {
  const refForm = useRef();

  const {mutate: forgotPasswordMutate} = useMutation(forgotPassword, {
    onSuccess: (data, payload) => {
      console.log(data,"updateCoachAttendanceList ON SUCCESS",payload)
      navigate(NavigationRoutes.AUTH_STACK.LOGIN);
      // navigate(NavigationRoutes.AUTH_STACK.LOGIN, {
      //   userEmail: payload?.email,
      // });
    },
  });

  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();
    if (data != null) {
      let payload: ForgotPasswordPayload = {
        parentId: data?.parentId,
        password: data?.password
      };
      console.log(payload, "payload of Forgot Password");
      forgotPasswordMutate(payload);

    }
  };

  return {
    onSubmitForm,
    refForm,
  };
}
