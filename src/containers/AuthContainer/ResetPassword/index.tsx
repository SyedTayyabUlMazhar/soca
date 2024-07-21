import AuthDefaultBottom from '@Component/AuthDefaultBottom/AuthDefaultBottom';
import AuthDefaultHeading from '@Component/AuthDefaultHeading';
import AuthWrapper from '@Component/AuthWrapper';
import ButtonWithInnerLoader from '@Component/ButtonWithInnerLoader';
import FormHandler from '@Component/FormHandler';
import Input from '@Component/Input';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useMutation} from '@tanstack/react-query';
import {resetPassword} from '@Api/Auth';

const ResetPassword = ({route}) => {
  console.log(route, 'this is from reset password screen');
  const {parentID} = route?.params?.payload;
  const {token} = route?.params?.data;
  const refForm = React.useRef();

  const {mutate: resetPasswordRequest, isLoading} = useMutation(resetPassword, {
    onSuccess: (data, payload) => {
      navigate(NavigationRoutes.AUTH_STACK.LOGIN);
    },
  });
  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();
    const payload = {
      token,
      parentID,
      newPassword: data?.newPassword,
    };
    resetPasswordRequest(payload);
  };
  return (
    <>
      <AuthWrapper wrapperStyle={{paddingTop: Metrics.verticalScale(120)}}>
        <AuthDefaultHeading
          title={'Create your new password'}
          desc={'Enter your new password.'}
        />
        <View style={styles.innerWrapper}>
          <View style={styles.container}>
            <FormHandler ref={refForm} validateOnChange>
              {(SCHEMAS: any) => {
                return (
                  <>
                    <Input
                      {...SCHEMAS.password('newPassword')}
                      placeholder="Enter new password"
                      returnKeyType={'next'}
                      // value='1234'
                      secureTextEntry={true}
                      isPassword={true}
                      placeholderTextColor={Colors.LIGHT_BORDER}
                    />
                  </>
                );
              }}
            </FormHandler>
          </View>
          <View>
            <ButtonWithInnerLoader
              onPress={onSubmitForm}
              buttonText={'Reset Password'}
              btnStyle={styles.appBtnStyle}
              loading={isLoading}
            />
            <AuthDefaultBottom
              text={"Don't have an account?"}
              btnText={'SignUp'}
              action={() => {
                navigate(NavigationRoutes.AUTH_STACK.SIGNUP);
              }}
            />
          </View>
        </View>
      </AuthWrapper>
    </>
  );
};

export default ResetPassword;
