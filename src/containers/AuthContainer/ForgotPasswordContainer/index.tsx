import AuthDefaultHeading from "@Component/AuthDefaultHeading";
import AuthWrapper from "@Component/AuthWrapper";
import ButtonWithInnerLoader from "@Component/ButtonWithInnerLoader";
import * as React from "react";
import { View } from "react-native";
import useForgotPasswordContainer from "./ForgotPasswordContainer";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import styles from "./style";
import Metrics from "@Utility/Metrics";

export default function ForgotPasswordScreen() {
  const { onSubmitForm, refForm,forgotPasswordLoading } = useForgotPasswordContainer();

  return (
    <>
      <AuthWrapper wrapperStyle={{paddingTop: Metrics.verticalScale(120)}}>
        <AuthDefaultHeading
          title={"Forgot password"}
          desc={"Enter email address to reset your password"}
        />
        <View style={styles.innerWrapper}>
          <ForgotPasswordForm refForm={refForm} />
          <ButtonWithInnerLoader
            onPress={onSubmitForm}
            buttonText={"Submit"}
            loading={forgotPasswordLoading}
            btnStyle={styles.appBtnStyle}
            
          />
        </View>
      </AuthWrapper>
    </>
  );
}
