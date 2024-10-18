import {AppLogo, SOCAPng, SOCASvg, SocaLogo} from '@Asset/logo';
import H1 from '@Component/Headings/H1';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Image,
} from 'react-native';

interface IAuthWrapper {
  wrapperStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  scrollEnabled?: Boolean;
}

export default function AuthWrapper({
  wrapperStyle,
  children,
  scrollEnabled = false,
}: IAuthWrapper) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      bounces={false}
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#374051'}}>
      <SafeAreaView style={styles.container}>
        <Image source={SOCAPng} style={{height: '25%', resizeMode: "contain"}} />
        
        <H1 text="mySOCA" style={{color: Colors.WHITE}} />

        <View style={wrapperStyle}>{children}</View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.verticalScale(60),
    alignItems: 'center',
    flex: 1,
    // marginHorizontal: Metrics.scale(20),
  },
});
