

import AuthDefaultHeading from '@Component/AuthDefaultHeading';
import AuthRouting from '@Component/AuthRouting';
import AuthWrapper from '@Component/AuthWrapper';
import ButtonWithInnerLoader from '@Component/ButtonWithInnerLoader';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {View} from 'react-native';
import styles from './style';
import FormHandler from '@Component/FormHandler';
import Input from '@Component/Input';
import { Email } from '@Asset/logo';
import AuthDefaultBottom from '@Component/AuthDefaultBottom/AuthDefaultBottom';
import { navigate } from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import useAuthSignupContainer from './AuthSignupContainer';
import { Colors } from '@Theme/Colors';

export default function AuthLoginScreen() {
  const {onSubmitForm, refForm, loginUserLoading} =
  useAuthSignupContainer();

  return (
    <>
      <AuthWrapper wrapperStyle={{paddingTop: Metrics.verticalScale(120)}}>
        <AuthDefaultHeading
          title={'Sign Up'}
          desc={'Create an account'}
        />
        <View style={styles.innerWrapper}>
          <View>
            <LoginForm refForm={refForm} />
          </View>
         <View>
         <ButtonWithInnerLoader
            onPress={onSubmitForm}
            buttonText={'SignUp'}
            loading={loginUserLoading}
            btnStyle={styles.appBtnStyle}
          />
           <AuthDefaultBottom
                text={"Already have an account?"}
                btnText={'Sign In'}
                action={() => {
                  navigate(NavigationRoutes.AUTH_STACK.LOGIN);
                }}
              />
         </View>
        </View>
      </AuthWrapper>
    </>
  );
}
interface ILoginFormProps {
  refForm: any;
}

const LoginForm = ({refForm}: ILoginFormProps) => {
  return (
    <View style={styles.container}>
      <FormHandler ref={refForm} validateOnChange>
        {(SCHEMAS: any) => {
          return (
            <>
              <Input
                 {...SCHEMAS.text('parentId')}
                placeholder="Enter your Email"
                // value='test@test.com'
                returnKeyType={'next'}
                placeholderTextColor={Colors.LIGHT_BORDER}
                rightIcon={<Email/>}
              />
                 <Input
                 {...SCHEMAS.text('parentName')}
                placeholder="Enter your Parent Name"
                // value='Ahmed'
                returnKeyType={'next'}
                placeholderTextColor={Colors.LIGHT_BORDER}
              />
             <Input
              {...SCHEMAS.password('password')}
                placeholder="Enter your password"
                returnKeyType={'next'}
                // value='1234'
                secureTextEntry={true}
                isPassword={true}
                placeholderTextColor={Colors.LIGHT_BORDER}
              />
              <Input
                 {...SCHEMAS.password('confirmPassword')}
                placeholder="Confirm password"
                returnKeyType={'done'}
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
  );
};
