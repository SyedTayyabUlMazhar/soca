import { Email } from "@Asset/logo";
import FormHandler from "@Component/FormHandler";
import Input from "@Component/Input";
import Metrics from "@Utility/Metrics";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IForgotPasswordForm {
  refForm: any;
}

const ForgotPasswordForm = ({ refForm }: IForgotPasswordForm) => {
  return (
    <View style={styles.container}>
      <FormHandler ref={refForm} validateOnChange>
        {(SCHEMAS: any) => {
          return (
          <Input
          {...SCHEMAS.text('parentId')}
          placeholder="Enter your Email"
          returnKeyType={'next'}
          placeholderTextColor={'#fff'}
          rightIcon={<Email/>}
        />
          );
        }}
      </FormHandler>
    </View>
  );
};
export default ForgotPasswordForm;

const styles = StyleSheet.create({
  container: {
    marginVertical: Metrics.verticalScale(10),
    marginBottom: 0,
    marginTop: Metrics.scale(30)
  },
});
