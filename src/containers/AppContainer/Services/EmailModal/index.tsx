import {SCHEMAS} from '@Component/FormHandler/Constants';
import Input from '@Component/Input';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import FormHandler from '@Component/FormHandler';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import AppButton from '@Component/Buttons/AppButton';
import Spacer from '@Component/Spacer';
import { useBoundStore } from '@Store/index';

interface ICustomModal {
  title?: string;
  desc?: string;
  handleDropOffPress: Function;
  handleSelection: (item: any) => void; // Added item parameter
  isModalVisible: boolean;
}

const EmailModal = ({
  isModalVisible,
  handleSelection,
  title,
  handleDropOffPress,
}: ICustomModal) => {
  const refForm = React.useRef();
  const setEmailZustand = useBoundStore(
    (state: any) => state.setEmailZustand,
  );
  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();
    if (data != null) {
      handleDropOffPress(false);
      handleSelection(data?.email);
      setEmailZustand(data?.email);
    }
  };
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.7}
      //   onBackdropPress={() => handleDropOffPress(false)}
      backdropTransitionOutTiming={0}>
      <View style={styles.modal}>
        <Text
          style={{
            ...Fonts.Medium(Fonts.Size.medium, Colors.DARK_BLUE),
            alignSelf: 'center',
          }}>
          {title}
        </Text>
        <FormHandler ref={refForm} validateOnChange>
          {SCHEMAS => {
            return (
              <View style={styles.inputWrapperWidth}>
                <Input
                  {...SCHEMAS.email('email')}
                  placeholder="Enter your email"
                  label="Email"
                  
                />
              </View>
            );
          }}
        </FormHandler>
        <Spacer vertical={12} />
        <AppButton
          title={'Continue'}
          // imageSource={RightArrowLarge}
          // iconAfterText={true}
          onPress={() => onSubmitForm()}
          textStyle={{color: Colors.WHITE}}
          style={{
            opacity: 0.9,
            width: '80%',
            alignSelf: 'center',
            paddingVertical: Metrics.verticalScale(15),
            backgroundColor: Colors.ICE_BLUE,
          }}
        />
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    paddingTop: Metrics.verticalScale(25),
    paddingBottom: Metrics.verticalScale(25),
    paddingHorizontal: Metrics.verticalScale(18),
    backgroundColor: Colors.FAMILY_BACKGROUND,
    marginHorizontal: Metrics.scale(10),
    borderRadius: Metrics.scale(15),
    justifyContent: 'center',
    height: 220,
    paddingVertical: 20,
  },
  buttonView: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: Metrics.baseMargin,
    justifyContent: 'space-around',
    marginTop: Metrics.verticalScale(10),
  },
  text: {
    alignSelf: 'center',
    ...Fonts.SemiBold(Fonts.Size.small, Colors.BLACK),
  },
  btnWrapper: {
    paddingHorizontal: Metrics.scale(30),
    paddingVertical: Metrics.verticalScale(8),
    borderRadius: Metrics.scale(10),
    borderWidth: Metrics.scale(1),
    borderColor: Colors.GREY_BORDER,
    justifyContent: 'center',
    backgroundColor: Colors.ICE_BLUE,
  },
  title: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
    marginBottom: Metrics.verticalScale(15),
    textAlign: 'center',
  },
  confirmText: {
    textAlign: 'center',
    marginBottom: Metrics.verticalScale(20),
    ...Fonts.SemiBold(Fonts.Size.normal, Colors.WHITE),
  },
  inputWrapperWidth: {
    width: '80%',
    alignSelf: 'center',
    marginTop: Metrics.baseMargin,
  },
});

export default EmailModal;
