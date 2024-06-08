import messaging from '@react-native-firebase/messaging';
import {handleNotificationRoutes} from '../../utility/common';
import Utils from '@Utility/Utils';
import {PermissionsAndroid} from 'react-native';
import {Platform} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export class FirebaseNotification {
  static initiated = false;
  static _navigation = null;

  static async requestPermission() {
    const enabled = await messaging().hasPermission();
    if (
      enabled === messaging.AuthorizationStatus.NOT_DETERMINED ||
      enabled === messaging.AuthorizationStatus.DENIED
    ) {
      await messaging().requestPermission();
    }
    const fcmToken = await messaging().getToken();
    console.log('FCM Token:', fcmToken);
  }

  static async getToken() {
    const fcmToken = await messaging().getToken();
    return Promise.resolve({FCMToken: fcmToken});
  }
  static async createNotificationListeners() {
    this.initiated = true;

    messaging().onMessage(async remoteMessage => {
      // FOREGROUND_STATE
      console.log('Foreground Notification:', remoteMessage);
      LocalNotification(remoteMessage, false);
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      // BACKGROUND_STATE
      console.log('Background Notification:', remoteMessage);
      const {data} = remoteMessage;
      this.handleNavigation(data);
    });

    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        if (remoteMessage) {
          // BACKGROUND_STATE
          console.log('Initial Notification:', remoteMessage);
          const {data} = remoteMessage;
          this.handleNavigation(data);
        }
      });
  }

  static async handleNavigation(data = {}) {
    setTimeout(() => handleNotificationRoutes(data), 3000);
  }
}

PushNotification.configure({
  permissions: {
    alert: true,
    badge: true,
    sound: true,
    category: 'CustomSamplePush',
  },

  onNotification: message => {
    console.log('ForGround');
    // FORGROUND-STATE
    const {data, userInteraction, foreground = true} = message;
    if (!userInteraction) {
      return;
    }
    FirebaseNotification.handleNavigation(data);
    message.finish(PushNotificationIOS.FetchResult.NoData);
  },
});

PushNotification.createChannel({
  channelId: 'channel-id',
  channelName: 'My_channel',
  channelDescription: 'A channel to categorise your notifications',
});

export const LocalNotification = (message, IsBackground = false) => {
  const {data, notification} = message;
  console.log(notification, 'messagemessagemessagemessagemessage');
  PushNotification.localNotification({
    data,
    channelId: 'channel-id',
    ...(Platform.OS === 'android'
      ? {
          channelId: 'channel-id',
        }
      : {
          userInfo: data,
        }),
    autoCancel: true,
    bigText: notification.body,
    title: notification.title,
    message: notification.body,
    vibrate: true,
    vibration: 300,
    messageId: 'message-id',
    smallIcon: 'ic_launcher',
    largeIcon: 'ic_launcher',
    // largeIcon: 'ic_logo_round',
    // color: '#000',
    ignoreInForeground: false,
  });
};
