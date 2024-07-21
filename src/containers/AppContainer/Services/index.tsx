import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {Colors} from '@Theme/Colors';
import Header from '@Component/AppHeader';
import H6 from '@Component/Headings/H6';
import ButtonView from '@Component/ButtonView';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import {FaqsIcon} from '@Asset/logo';
import { useQuery } from '@tanstack/react-query';
import { getLocation } from '@Api/App';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import useModal from '@Hook/useModal';
import CustomSelectionModal from '@Component/CustomSelectionModal';
import HallofFameTabs from '@Component/HallofFameTabs';
import { servicesTabs } from '@Constants/dummyData';

const ServicesScreen = () => {
  const [selectedLocation,setSelectedLocation]=useState(null)
  const locationModal=useModal()
  const { data: getLocationList } = useQuery(
    [STORAGE_KEYS.GET_LOCATION],
    getLocation,
    { cacheTime: 0, staleTime: 0 },
);
const onLocationSelect=(location: React.SetStateAction<string>)=>{
  setSelectedLocation(location)
  locationModal.hide()
}

  return (
    <View style={{flex: 1, backgroundColor: Colors.APP_BACKGROUND}}>
      <Header title={'Services'} />
      <View style={{marginHorizontal: Metrics.scale(20),marginTop:Metrics.doubleBaseMargin,flex:1}}>
      <ButtonView
        onPress={() => locationModal.show()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.DARK_BLUE,
          padding: 12,
          borderRadius: 20,
          marginBottom:20
        }}>
        <H6
          text={selectedLocation ?? 'Select Location'}
          style={{color: Colors.WHITE}}
        />
        <FaqsIcon />
      </ButtonView>
      <HallofFameTabs component={servicesTabs}/>

      </View>

      <View
        style={{
          justifyContent: 'space-between',
          marginTop: 'auto',
          flexDirection: 'row',
          marginHorizontal: Metrics.scale(20),
          marginBottom: Metrics.verticalScale(20),
        }}>
        <View style={{alignItems: 'center'}}>
          <H6 text="Total Amount" style={{color: Colors.TEXT_COLOR}} />
          <H6 text="$000.00" style={{color: Colors.WHITE}} />
        </View>
        <ButtonView
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
      </View>
      <CustomSelectionModal
        isModalVisible={locationModal.isVisible}
        handleSelection={onLocationSelect}
        title={"Select Location"}
        handleDropOffPress={locationModal.hide}
        modalData={[
          {
            name:'Team 1',
            id:'1'
          },
          {
            name:'Team 2',
            id:'2'
          },
          {
            name:'Team 3',
            id:'3'
          }
        ]}
      />
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({});
