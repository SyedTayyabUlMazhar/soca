import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '@Theme/Colors';
import H6 from '@Component/Headings/H6';
import Metrics from '@Utility/Metrics';
import {FaqsIcon} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import Fonts from '@Theme/Fonts';
import useRentalContainer from './rentalContainer';
import ServiceModal from '../../ServiceModal';
import useModal from '@Hook/useModal';
import {useBoundStore} from '@Store/index';

const Rentals = () => {
  const locationZustand = useBoundStore((state: any) => state.locationZustand);
  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [selectedHours, setSelectedHours] = useState<any>(null);
  const gameModal = useModal();
  const hoursModal = useModal();

  const {getGamesData, getHoursData, rentalData} = useRentalContainer(locationZustand,selectedGame,selectedHours);

  const onHoursSelection = (hour: React.SetStateAction<string>) => {
    setSelectedHours(hour);
    hoursModal.hide();
  };

  const onSelectedGame = (game: React.SetStateAction<string>) => {
    setSelectedGame(game);
    gameModal.hide();
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.APP_BACKGROUND}}>
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
          onPress={() => {
            gameModal.show();
          }}>
          <H6
            text={selectedGame ?? 'Select Game'}
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
          onPress={() => {
            hoursModal.show();
          }}>
          <H6 text={selectedHours ?? 'Select'} style={{color: Colors.WHITE}} />
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
      <View
        style={{
          justifyContent: 'space-between',
          marginTop: 'auto',
          flexDirection: 'row',
          marginBottom: Metrics.verticalScale(20),
        }}>
        <View style={{alignItems: 'center'}}>
          <H6 text="Total Amount" style={{color: Colors.TEXT_COLOR}} />
          <H6
            text={rentalData?.data?.Price ?? '00.00'}
            style={{color: Colors.WHITE}}
          />
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
      <ServiceModal
        isModalVisible={gameModal.isVisible}
        handleSelection={onSelectedGame}
        title={'Select Lane'}
        handleDropOffPress={gameModal.hide}
        modalData={getGamesData?.values}
      />
      <ServiceModal
        isModalVisible={hoursModal.isVisible}
        handleSelection={onHoursSelection}
        title={'Select Times/Week'}
        handleDropOffPress={hoursModal.hide}
        modalData={getHoursData?.values}
      />
    </View>
  );
};

export default Rentals;

const styles = StyleSheet.create({});
