import {FaqsIcon} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H6 from '@Component/Headings/H6';
import useModal from '@Hook/useModal';
import {useBoundStore} from '@Store/index';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ServiceModal from '../../ServiceModal';
import useAcademyContainer from './academyContainer';
import {useMutation} from '@tanstack/react-query';
import {academyResult} from '@Api/App';
import H1 from '@Component/Headings/H1';
import Fonts from '@Theme/Fonts';

const Academy = () => {
  const locationZustand = useBoundStore((state: any) => state.locationZustand);
  const [selectedKidAge, setSelectedKidAge] = useState(null);
  const [selectedTimeWeek, setSelectedTimeWeek] = useState(null);
  const [selectedKidAge2, setSelectedKidAge2] = useState(null);
  const [selectedTime2Week, setSelectedTime2Week] = useState(null);
  const [data, setData] = useState(null);
  const kidAgeModal = useModal();
  const timeWeekModal = useModal();
  const kidAge2Modal = useModal();
  const time2WeekModal = useModal();
  const {getKidAge, getTimesPerWeek} = useAcademyContainer();

  const { mutate: signupMutation } = useMutation(academyResult, {
    onSuccess: (response) => {
      console.log('API response:', response);
      if (response?.data) {
        setData(response);
      } else {
        console.warn('Unexpected response structure:', response);
      }
    },
    onError: (error) => {
      console.error('API call failed:', error);
    },
  });
  const payload: any = {
    location: locationZustand, // values: CLB, FDK, ASH
    kids: {
      first: {
        age: selectedKidAge ?? 'N/A', // values: u11-Vinyl, u11-L, u12-u15, u16+
        perWeek: selectedTimeWeek ?? 'N/A', // values: 1, 2
      },
      ...(selectedKidAge2  && selectedTime2Week ? {
        second: {
          age: selectedKidAge2, // values: u11-Vinyl, u11-L, u12-u15, u16+
          perWeek: selectedTime2Week, // values: 1, 2
        }
      } : {})
    },
  };

  
const totalAmount = data?.data?.['Net Price']
  const onKidSelection = (kidAge: React.SetStateAction<string>) => {
    setSelectedKidAge(kidAge);
    kidAgeModal.hide();
  };

  const onTimeSelection = (timeWeek: React.SetStateAction<string>) => {
    setSelectedTimeWeek(timeWeek);
    timeWeekModal.hide();
  };

  const onKidSelection2 = (kidAge2: React.SetStateAction<string>) => {
    setSelectedKidAge2(kidAge2);
    kidAge2Modal.hide();
  };

  const onTimeSelection2 = (time2Week: React.SetStateAction<string>) => {
    setSelectedTime2Week(time2Week);
    time2WeekModal.hide();
  };

  useEffect(() => {
    if (locationZustand && (selectedKidAge || selectedTimeWeek || selectedKidAge2 || selectedTime2Week)) {
      console.log('Triggering API call with payload:', payload);
      signupMutation(payload);
    }
  }, [
    locationZustand,
    selectedKidAge,
    selectedTimeWeek,
    selectedKidAge2,
    selectedTime2Week,
    signupMutation,
  ]);


  return (
    <View style={{flex: 1, backgroundColor: Colors.APP_BACKGROUND}}>
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
          onPress={() => {
            kidAgeModal.show();
          }}>
          <H6
            text={selectedKidAge ?? 'Select Age'}
            style={{color: Colors.WHITE}}
          />
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
          onPress={() => {
            timeWeekModal.show();
          }}>
          <H6
            text={selectedTimeWeek ?? 'Select'}
            style={{color: Colors.WHITE}}
          />
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
          onPress={() => {
            kidAge2Modal?.show();
          }}>
          <H6
            text={selectedKidAge2 ?? 'Select Age'}
            style={{color: Colors.WHITE}}
          />
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
          onPress={() => {
            time2WeekModal?.show();
          }}>
          <H6
            text={selectedTime2Week ?? 'Select'}
            style={{color: Colors.WHITE}}
          />
          <FaqsIcon style={{marginHorizontal: Metrics.smallMargin}} />
        </ButtonView>
      </View>
      {/* <View
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
      </View> */}
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
          marginBottom: Metrics.baseMargin,
        }}>
        <H6 text="Monthly Cost" style={{color: Colors.WHITE}} />
        <H6 text="$00.00" style={{color: Colors.WHITE}} />
      </View>
      <ServiceModal
        isModalVisible={kidAgeModal.isVisible}
        handleSelection={onKidSelection}
        title={'Select Kid 1 Age'}
        handleDropOffPress={kidAgeModal.hide}
        modalData={getKidAge?.values}
      />
      <ServiceModal
        isModalVisible={timeWeekModal.isVisible}
        handleSelection={onTimeSelection}
        title={'Select Times/Week'}
        handleDropOffPress={timeWeekModal.hide}
        modalData={getTimesPerWeek?.values}
      />
      <ServiceModal
        isModalVisible={kidAge2Modal.isVisible}
        handleSelection={onKidSelection2}
        title={'Select Kid 2 Age'}
        handleDropOffPress={kidAge2Modal.hide}
        modalData={getKidAge?.values}
      />
      <ServiceModal
        isModalVisible={time2WeekModal.isVisible}
        handleSelection={onTimeSelection2}
        title={'Select Times/Week'}
        handleDropOffPress={time2WeekModal.hide}
        modalData={getTimesPerWeek?.values}
      />

    </ScrollView>
          <View
          style={{
            justifyContent: 'space-between',
            marginTop: 'auto',
            flexDirection: 'row',
            marginBottom: Metrics.verticalScale(20),
          }}>
          <View style={{alignItems: 'center'}}>
            <H6 text="Total Amount" style={{color: Colors.TEXT_COLOR}} />
            <H6 text={`${totalAmount ?? '00.00'}`} style={{color: Colors.WHITE}} />
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
        </View>
  );
};

export default Academy;

const styles = StyleSheet.create({});
