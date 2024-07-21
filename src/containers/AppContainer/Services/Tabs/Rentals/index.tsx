import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@Theme/Colors'
import H6 from '@Component/Headings/H6'
import Metrics from '@Utility/Metrics'
import { FaqsIcon } from '@Asset/logo'
import ButtonView from '@Component/ButtonView'

const Rentals = () => {
  return (
    <View style={{flex:1,backgroundColor:Colors.APP_BACKGROUND}}>
          <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Metrics.verticalScale(16),
        }}>
        <H6 text="Type of Game" style={{color: Colors.WHITE}} />
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
          <H6 text={'Select Game'} style={{color: Colors.WHITE}} />
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
        <H6 text="No of Hours" style={{color: Colors.WHITE}} />
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
        <H6 text="Rental cost" style={{color: Colors.WHITE}} />
        <H6 text="2hrs x $00.00" style={{color: Colors.WHITE}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Metrics.verticalScale(16),
        }}>
        <H6 text="Monthly Cost" style={{color: Colors.WHITE}} />
        <H6 text="$00.00" style={{color: Colors.WHITE}} />
      </View>
    </View>
  )
}

export default Rentals

const styles = StyleSheet.create({})