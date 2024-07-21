import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '@Theme/Colors';
import ButtonView from '@Component/ButtonView';
import H6 from '@Component/Headings/H6';
import {FaqsIcon} from '@Asset/logo';
import Metrics from '@Utility/Metrics';
import H5 from '@Component/Headings/H5';

const Academy = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.APP_BACKGROUND}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Metrics.verticalScale(16),
        }}>
        <H6 text="Select Kid 1 age" style={{color: Colors.WHITE}} />
        <ButtonView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.DARK_BLUE,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => {}}>
          <H6 text={'Select Age'} style={{color: Colors.WHITE}} />
          <FaqsIcon style={{marginHorizontal: Metrics.smallMargin}} />
        </ButtonView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Metrics.verticalScale(16),
        }}>
        <H6 text="Times/week" style={{color: Colors.WHITE}} />
        <ButtonView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.DARK_BLUE,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => {}}>
          <H6 text={'Select'} style={{color: Colors.WHITE}} />
          <FaqsIcon style={{marginHorizontal: Metrics.smallMargin}} />
        </ButtonView>
      </View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 10,
          height: 1,
          width: '100%',
          backgroundColor: Colors.WHITE,
          borderWidth: 1,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Metrics.verticalScale(16),
        }}>
        <H6 text="Select Kid 2 age" style={{color: Colors.WHITE}} />
        <ButtonView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.DARK_BLUE,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => {}}>
          <H6 text={'Select Age'} style={{color: Colors.WHITE}} />
          <FaqsIcon style={{marginHorizontal: Metrics.smallMargin}} />
        </ButtonView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Metrics.verticalScale(16),
        }}>
        <H6 text="Times/week" style={{color: Colors.WHITE}} />
        <ButtonView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.DARK_BLUE,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => {}}>
          <H6 text={'Select'} style={{color: Colors.WHITE}} />
          <FaqsIcon style={{marginHorizontal: Metrics.smallMargin}} />
        </ButtonView>
      </View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 10,
          height: 1,
          width: '100%',
          backgroundColor: Colors.WHITE,
          borderWidth: 1,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Metrics.verticalScale(16),
        }}>
        <H6 text="Select Kid 2 age" style={{color: Colors.WHITE}} />
        <ButtonView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.DARK_BLUE,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => {}}>
          <H6 text={'Select Age'} style={{color: Colors.WHITE}} />
          <FaqsIcon style={{marginHorizontal: Metrics.smallMargin}} />
        </ButtonView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Metrics.verticalScale(16),
        }}>
        <H6 text="Times/week" style={{color: Colors.WHITE}} />
        <ButtonView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.DARK_BLUE,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => {}}>
          <H6 text={'Select'} style={{color: Colors.WHITE}} />
          <FaqsIcon style={{marginHorizontal: Metrics.smallMargin}} />
        </ButtonView>
      </View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 10,
          width: '100%',
          backgroundColor: Colors.WHITE,
          borderWidth: 1,
          height: 2.1,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Metrics.verticalScale(16),
        }}>
        <H6 text="kids cost" style={{color: Colors.WHITE}} />
        <H6 text="2x $00.00" style={{color: Colors.WHITE}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Metrics.verticalScale(16),
          marginBottom:Metrics.baseMargin
        }}>
        <H6 text="Monthly Cost" style={{color: Colors.WHITE}} />
        <H6 text="$00.00" style={{color: Colors.WHITE}} />
      </View>



    </ScrollView>
  );
};

export default Academy;

const styles = StyleSheet.create({});
