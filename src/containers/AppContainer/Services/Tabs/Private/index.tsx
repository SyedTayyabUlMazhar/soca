import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '@Theme/Colors';
import ButtonView from '@Component/ButtonView';
import H6 from '@Component/Headings/H6';
import {FaqsIcon} from '@Asset/logo';
import Metrics from '@Utility/Metrics';

const Private = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.APP_BACKGROUND}}>
      <ButtonView
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.DARK_BLUE,
          padding: 12,
          borderRadius: 20,
          marginBottom: 20,
          marginTop:Metrics.verticalScale(16)
        }}>
        <H6 text={'Select Session Type'} style={{color: Colors.WHITE}} />
        <FaqsIcon />
      </ButtonView>
      <ButtonView
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.DARK_BLUE,
          padding: 12,
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <H6 text={'Select Coach'} style={{color: Colors.WHITE}} />
        <FaqsIcon />
      </ButtonView>
      <ButtonView
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.DARK_BLUE,
          padding: 12,
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <H6 text={'Number of Sessions'} style={{color: Colors.WHITE}} />
        <FaqsIcon />
      </ButtonView>
      <ButtonView
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.DARK_BLUE,
          padding: 12,
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <H6 text={'Select Kid 1 Age'} style={{color: Colors.WHITE}} />
        <FaqsIcon />
      </ButtonView>
      <ButtonView
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.DARK_BLUE,
          padding: 12,
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <H6 text={'Select Kid 2 Age'} style={{color: Colors.WHITE}} />
        <FaqsIcon />
      </ButtonView>
      <ButtonView
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.DARK_BLUE,
          padding: 12,
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <H6 text={'Select Kid 3 Age'} style={{color: Colors.WHITE}} />
        <FaqsIcon />
      </ButtonView>
      <ButtonView
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.DARK_BLUE,
          padding: 12,
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <H6 text={'Select Times/week'} style={{color: Colors.WHITE}} />
        <FaqsIcon />
      </ButtonView>
    </ScrollView>
  );
};

export default Private;

const styles = StyleSheet.create({});
