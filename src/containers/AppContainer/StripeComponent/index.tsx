import {StripeProvider} from '@stripe/stripe-react-native';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';

export default function StripeComponent(body: {body?: any}) {
  console.log(body?.body, 'bodybodybodybody');

  return (
    <StripeProvider
      publishableKey={
        'pk_test_51PewOmRpPsqyPZ0apfSoZHAAAAijHmIzUlxEI5JUxhDjgJChPG1Aa7Yn877RDGk03Rn5jiDHzjd1NZPtzjVLetIM00AhBtdLB5'
      }>
      <PaymentScreen payload={body?.body} />
    </StripeProvider>
  );
}

// PaymentScreen.ts

import {useStripe} from '@stripe/stripe-react-native';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import {useEffect, useState} from 'react';
import AppButton from '../../../component/Buttons/AppButton';
import H6 from '@Component/Headings/H6';
import ButtonView from '@Component/ButtonView';
import Fonts from '@Theme/Fonts';
import {useMutation} from '@tanstack/react-query';
import {academyResult, createPayment} from '@Api/App';
// import {useBoundStore} from '@Store/index';

function PaymentScreen(payload) {
  const [loading, setLoading] = useState(false);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  const stripeData = `pi_3PhbTbRpPsqyPZ0a0Tyfwwty_secret_iZfKAiSiwjw05cGsPwjHZxX3u`;

  const {mutate: paymentMutate} = useMutation(createPayment, {
    onSuccess: response => {
      console.log('API response:', response);
    },
    onError: error => {
      console.error('API call failed:', error);
    },
  });
  const initializePaymentSheet = async () => {
    const {error} = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      setupIntentClientSecret: `pi_3PhbTbRpPsqyPZ0a0Tyfwwty_secret_iZfKAiSiwjw05cGsPwjHZxX3u`,

      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();
    if (error) {
      console.log(error, 'this is error');
      return;
    }
  };

  useEffect(() => {
    stripeData;
  }, [openPaymentSheet]);

  useEffect(() => {
    initializePaymentSheet();
  }, [stripeData]);

  return (
    <>
      <ButtonView
        onPress={openPaymentSheet}
        style={{
          backgroundColor: Colors.ICE_BLUE,
          justifyContent: 'center',
          padding: Metrics.baseMargin,
          paddingHorizontal: 40,
          borderRadius: 6,
        }}>
        <H6
          text="Avail Now"
          style={{...Fonts.SemiBold(Fonts.Size.xSmall, Colors.BLACK)}}
        />
      </ButtonView>
    </>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: Metrics.verticalScale(0),
    alignSelf: 'center',
    position: 'absolute',
    top:
      Platform.OS == 'android'
        ? Metrics.verticalScale(360)
        : Metrics.verticalScale(200),
  },
  buttonView: {marginTop: Metrics.verticalScale(120)},
  button: {
    backgroundColor: Colors.WHITE,
    marginVertical: Metrics.verticalScale(10),
    alignItems: 'center',
    marginTop: Metrics.verticalScale(30),
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 5,
  },
});
