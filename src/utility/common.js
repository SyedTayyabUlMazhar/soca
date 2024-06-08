import Metrics from './Metrics';
import DeviceInfo from 'react-native-device-info';
import {Platform, StyleSheet} from 'react-native';
import messaging from "@react-native-firebase/messaging";
import Utils from './Utils';

export const paginationDataWithReturn = apiData => {
  let allData = apiData?.pages
    ? apiData?.pages.map(page => page?.data).flat()
    : apiData?.data;
  return allData;
};

export const commonAbsoluteCss = StyleSheet.create({
  openSheetWrapper: {
    position: 'absolute',
    bottom: Metrics.scale(0),
    right: Metrics.scale(0),
    left: Metrics.scale(0),
  },
});

export const CheckNull = data => {
  if (data != undefined && data != null) {
    return data;
  } else {
    return 'N/A';
  }
};

export const getDeviceId = () => {
  return DeviceInfo.getDeviceId();
};

export const getDeviceName = () => {
  return DeviceInfo.getSystemName();
};

export async function getDevicePayload() {
  const FCMTokenss = await messaging().getToken();
  return {
    deviceId: FCMTokenss,
    deviceType: Utils.isPlatformAndroid() ? 1 : 2,
  };
}
