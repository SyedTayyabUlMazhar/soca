import {
  ChevronBlue,
  DriverRating,
  RightArrowSmall
} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import CustomToggle from '@Component/CustomToggle/CustomToggle';
import H6 from '@Component/Headings/H6';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IRenderMenuItem {
  icon?: any;
  text?: string;
  isVerified?: boolean;
  action?: Function;
  optionalText?: string;
  actionType?: string;
  emailVerification?: any;
  emailVerificationAction?: any;
  requestEmailOtpMutation?: any;
  isEditable?: boolean;
  mainTextStyle?: any;
  isRating?: boolean;
  allowIncomingRequests?: boolean;
}

const RenderMenuItem = ({
  icon,
  text,
  action,
  optionalText,
  isVerified,
  emailVerification,
  actionType,
  emailVerificationAction,
  requestEmailOtpMutation,
  isEditable = true,
  mainTextStyle,
  isRating = false,
  allowIncomingRequests,
}: IRenderMenuItem) => {
  const handlePressVerifyEmail = () => {
    const payload = {
      isEmailVerified: true,
    };
    emailVerificationAction(payload);
  };

  const getView = (actionType: string | undefined) => {
    switch (actionType) {
      case 'showBtn':
        return (
          <View style={styles.emailVerificationWrapper}>
            <H6 style={styles.emailVerificationText} text={'✓'} />
          </View>
        );
      case 'showVerifyBtn':
        return (
          <ButtonView
            // onPress={() =>  requestEmailOtpMutation() } This Will Done AFter API
            onPress={() => console.log()}
            style={styles.emailVerificationWrapper}>
            <H6 style={styles.emailVerificationText} text={'verify'} />
          </ButtonView>
        );
      case 'Chevron':
        return (
          <View>
            <ChevronBlue />
          </View>
        );
      case 'showToggle':
        return (
          <View style={{right: -5}}>
            <CustomToggle
              isActive={allowIncomingRequests}
              onToggle={() => {
                // Handle the toggle action here
                console.log('Toggle pressed!',allowIncomingRequests); // Optional logging
              }}
            />
          </View>
        );

      case 'ArrowRight':
        return (
          <View>
            <RightArrowSmall />
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View>
      <ButtonView
        enableClick={!isEditable}
        style={[styles.root, !isEditable ? {opacity: 0.5} : {opacity: 1}]}
        onPress={() => action()}
        activeOpacity={1}>
        <View style={styles.container}>
          <View style={styles.iconWrapper}>{icon}</View>
          <View style={styles.textWrapper}>
            <H6 style={[styles.mainText, mainTextStyle]} text={text} />
            {optionalText && (
              <>
                <H6 style={styles.optionalText} text={optionalText} />
                {isRating && <DriverRating />}
              </>
            )}
          </View>
        </View>
        <View>{getView(actionType)}</View>
      </ButtonView>
    </View>
  );
};

export default RenderMenuItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.scale(5),
    marginBottom: Metrics.scale(13),
  },
  textWrapper: {
    marginLeft: Metrics.scale(20),
  },
  mainText: {
    ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.WHITE),
  },
  optionalText: {
    ...Fonts.Regular(Fonts.Size.xxSmall, Colors.Colors.DARK_BLACK),
  },
  iconWrapper: {
    width: Metrics.scale(34),
    height: Metrics.scale(34),
    backgroundColor: Colors.Colors.FAMILY_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emailVerificationWrapper: {
    backgroundColor: Colors.Colors.TEA_GREEN,
    paddingVertical: Metrics.verticalScale(5),
    paddingHorizontal: Metrics.verticalScale(10),
    borderRadius: Metrics.verticalScale(100),
  },
  emailVerificationText: {
    ...Fonts.Regular(Fonts.Size.xSmall, Colors.Colors.WHITE),
  },
});
