import {HidePassword, RightArrowLarge, ShowPassword} from '@Asset/logo';
import AuthWrapper from '@Component/AuthWrapper/AuthWrapper';
import AppButton from '@Component/Buttons/AppButton';
import FormHandler from '@Component/FormHandler';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import useAuthLoginContainer from './AuthLoginContainer';
import Input from '@Component/Input';
import AuthDefaultHeading from '@Component/AuthDefaultHeading/AuthDefaultHeading';
import AuthDefaultBottom from '@Component/AuthDefaultBottom/AuthDefaultBottom';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import H7 from '@Component/Headings/H7';

const AuthLogin = () => {
  const {refForm, onSubmitForm} = useAuthLoginContainer();
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };
  return (
    <>
      {/* <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}
    ></KeyboardAvoidingView> */}
      <AuthWrapper wrapperStyle={{flex: 1, width: '100%'}} scrollEnabled={true}>
        <View
          style={{
            flex: 1,
            marginTop: Metrics.verticalScale(20),
            // marginHorizontal: Metrics.scale(20),
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: Metrics.doubleBaseMargin,
            borderTopRightRadius: Metrics.doubleBaseMargin,
            shadowColor: Colors.BLACK,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 1,
          }}>
          <FormHandler ref={refForm} validateOnChange>
            {SCHEMAS => {
              return (
                <View style={{marginTop: Metrics.doubleBaseMargin}}>
                  <AuthDefaultHeading title="Login To Your Account" />
                  <View style={{marginTop: Metrics.baseMargin}}>
                    <View style={styles.inputWrapperWidth}>
                      <Input
                        {...SCHEMAS.text('parentId')}
                        placeholder="Enter your ID"
                        label="Parent Id"
                        returnKeyType={'next'}
                      />
                    </View>
                    <View style={styles.inputWrapperWidth}>
                      <Input
                        {...SCHEMAS.password('password')}
                        placeholder="Enter your password"
                        label="Password"
                        returnKeyType={'done'}
                        secureTextEntry={isPasswordVisible ? false : true}
                      />
                      <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        style={styles.iconContainer}>
                        {isPasswordVisible ? (
                          <ShowPassword />
                        ) : (
                          <HidePassword />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          </FormHandler>
          <View style={styles.bottomWrapper}>
            <AppButton
              title={'Login'}
              // imageSource={RightArrowLarge}
              // iconAfterText={true}
              onPress={() => onSubmitForm()}
              textStyle={{color: Colors.WHITE}}
              style={{opacity: 0.9}}
            />
            <View style={{marginTop: Metrics.baseMargin, alignItems: 'center'}}>
              <AuthDefaultBottom
                text={"Don't have an account?"}
                btnText={'SignUp'}
                action={() => {
                  navigate(NavigationRoutes.AUTH_STACK.SIGNUP);
                }}
              />
              <H7
                text="Copyright ©️ 2023 SOCA"
                style={{
                  marginTop: -5,
                  width: '100%',
                  textAlign: 'center',
                  ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.GREY),
                }}
              />
            </View>
          </View>
        </View>
      </AuthWrapper>
    </>
  );
};

export default AuthLogin;

const styles = StyleSheet.create({
  Input: {
    marginBottom: Metrics.verticalScale(60),
  },
  underLineBTnStyle: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.BLUE_LINK),
  },
  inputWrapperWidth: {
    width: '80%',
    alignSelf: 'center',
    marginTop: Metrics.smallMargin,
  },
  bottomWrapper: {
    marginTop:"auto",
    width: '80%',
    alignSelf: 'center',
    marginBottom: 24
  },
  iconContainer: {
    position:'absolute',
    right: 16,
    top: 20
  },
});
