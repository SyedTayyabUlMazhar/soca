import {FaqsIcon} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import FormDataInput from '@Component/FormDateInput';
import FormHandler from '@Component/FormHandler';
import H4 from '@Component/Headings/H4';
import H6 from '@Component/Headings/H6';
import Input from '@Component/Input';
import useTeamSelectionModalContainer from '@Component/TeamSelectionModal/TeamSelectionModalContainer';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import useManagerContainer from './ManagerContainer';
import CustomSelectionModal from './CustomSelectionModal';
import CustomSelectionDateModal from './CustomSelectionDateModal';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';
import {getTeamAllocation} from '@Api/App';
import {navigate} from '@Service/navigationService';
import { queryClient } from '@Api/Client';

interface ICustomModal {
  title?: string;
  desc?: string;
  changeDeleteModalVisible: Function;
  setIsDeleteAccountVisible: Function;
  isDeleteAccountVisible: boolean;
  isShowDesc?: boolean;
  isNetConnection?: boolean;
  primaryBtnTxt?: string;
  cbFunc?: any;
  CallbackFuntion?:any
}

const ManagerModal = ({
  changeDeleteModalVisible,
  setIsDeleteAccountVisible,
  isDeleteAccountVisible,
  title = 'title',
  desc = 'desc',
  isShowDesc = true,
  isNetConnection = true,
  primaryBtnTxt = 'yes',
  cbFunc,
  CallbackFuntion
}: ICustomModal) => {
  const refForm = React.useRef();

  const [isTourneyModalVisible, setIsTourneyModalVisible] = useState(false);
  const [isTeamModalVisible, setIsTeamModalVisible] = useState(false);
  const [isDivisionModalVisible, setIsDivisionModalVisible] = useState(false);
  const [isOpponentModalVisible, setIsOpponentModalVisible] = useState(false);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);
  const [selectedTourney, setSelectedTourney] = useState('');
  const [selectedTeam, setIsSelectedTeam] = useState('');
  const [selectedDivision, setIsSelectedDivision] = useState('');
  const [selectedOpponent, setIsSelectedOpponent] = useState('');
  const [selectedDate, setIsSelectedDate] = useState('');



  const {
    getTournamentData,
    getDivisionData,
    getTeamData,
    getDateData,
    getAllocationData,
    AllocationRefetch,
    fieldingSessionRefetch,
    getDateRefetch,
    getSessionData
  } = useManagerContainer(
    selectedTourney,
    selectedDivision,
    selectedTeam,
    selectedOpponent,
    selectedDate,
  );

console.log(getAllocationData,'getAllocationDatagetAllocationDatagetAllocationDatagetAllocationData');

  // useEffect(() => {
  //   if (
  //     selectedTourney &&
  //     selectedTeam &&
  //     selectedDivision &&
  //     selectedOpponent
  //   ) {
  //     getDateRefetch()
  //   }
  // }, [selectedTourney, selectedTeam, selectedDivision, selectedOpponent]);
  const toggleTourneyModal = () => {
    setIsTourneyModalVisible(!isTourneyModalVisible);
  };

  const toggleTeamModal = () => {
    setIsTeamModalVisible(!isTeamModalVisible);
  };

  const toggleDivisionModal = () => {
    setIsDivisionModalVisible(!isDivisionModalVisible);
  };

  const toggleOpponentModal = () => {
    setIsOpponentModalVisible(!isOpponentModalVisible);
  };

  const toggleDateModal = () => {
    setIsDateModalVisible(!isDateModalVisible);
  };

  const handleTourneySelection = tourney => {
    setSelectedTourney(tourney);
    setIsTourneyModalVisible(false);
  };

  const handleTeamSelection = team => {
    setIsSelectedTeam(team);
    setIsTeamModalVisible(false);
  };

  const handleDivisionSelection = division => {
    setIsSelectedDivision(division);
    setIsDivisionModalVisible(false);
  };
  const handleOpponentSelection = opponent => {
    // getDateRefetch()
    setIsSelectedOpponent(opponent);
    setIsOpponentModalVisible(false);
  };
  const handleDateSelection = date => {
    
    setIsSelectedDate(date);
    setIsDateModalVisible(false);
  };

  const handleBackDrop = (bool: boolean) => {
    setIsDeleteAccountVisible(bool);
  };
  const handleTourneyDrop = (bool: boolean) => {
    setIsTourneyModalVisible(bool);
  };
  const handleTeamDrop = (bool: boolean) => {
    setIsTeamModalVisible(bool);
  };
  const handleDivisionDrop = (bool: boolean) => {
    setIsDivisionModalVisible(bool);
  };

  const handleOpponenentDrop = (bool: boolean) => {

    setIsOpponentModalVisible(bool);
  };

  const handleDateDrop = (bool: boolean) => {
    setIsDateModalVisible(bool);
  };

  const handlePressConfirmSelection = () => {
    setIsDeleteAccountVisible(false);

      // CallbackFuntion(getSessionData)

    let payload = {
      date: selectedDate,
      tourney: selectedTourney,
      team: selectedTeam,
      div: selectedDivision,
      opponent: selectedOpponent,
    };
    console.log(payload, 'payload');
    changeDeleteModalVisible(payload);
    setIsDeleteAccountVisible(false);
    AllocationRefetch();

    cbFunc(getAllocationData);


    fieldingSessionRefetch()
    
  };
  

  return (
    <ReactNativeModal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.5}
      onBackdropPress={!isNetConnection ? null : () => handleBackDrop(false)}
      isVisible={isDeleteAccountVisible}
      backdropTransitionOutTiming={0}>
      <View style={styles.modal}>
        <H4
          text="Select Game"
          style={{
            ...Fonts.Medium(Fonts.Size.medium, Colors.WHITE),
            alignSelf: 'center',
            marginBottom: 10,
          }}
        />
        <FormHandler ref={refForm} validateOnChange>
          {SCHEMAS => {
            return (
              <>
                <H6
                  text="Select Tournament"
                  style={{...Fonts.Medium(Fonts.Size.xSmall, Colors.DARK_BLUE)}}
                />
                <TouchableOpacity onPress={toggleTourneyModal}>
                  <Input
                    rightIcon={<FaqsIcon />}
                    placeholder={'Select tournament'}
                    placeholderTextColor={Colors.WHITE}
                    value={selectedTourney}
                    isDisabled={true}
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: Colors.DARK_BLUE,
                      borderWidth: 1,
                      borderRadius: 10,
                      ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE),
                      paddingHorizontal: Metrics.scale(15),
                      marginVertical: Metrics.verticalScale(10),
                    }}
                  />
                </TouchableOpacity>
                <H6
                  text="Select Division"
                  style={{...Fonts.Medium(Fonts.Size.xSmall, Colors.DARK_BLUE)}}
                />
                <TouchableOpacity onPress={toggleDivisionModal}>
                  <Input
                    rightIcon={<FaqsIcon />}
                    placeholder={'Select Division'}
                    placeholderTextColor={Colors.WHITE}
                    value={selectedDivision}
                    isDisabled={true}
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: Colors.DARK_BLUE,
                      borderWidth: 1,
                      borderRadius: 10,
                      ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE),
                      paddingHorizontal: Metrics.scale(15),
                      marginVertical: Metrics.verticalScale(10),
                    }}
                  />
                </TouchableOpacity>
                <H6
                  text="Select Team"
                  style={{...Fonts.Medium(Fonts.Size.xSmall, Colors.DARK_BLUE)}}
                />
                <TouchableOpacity onPress={toggleTeamModal}>
                  <Input
                    rightIcon={<FaqsIcon />}
                    placeholder={'Select Team'}
                    placeholderTextColor={Colors.WHITE}
                    value={selectedTeam}
                    isDisabled={true}
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: Colors.DARK_BLUE,
                      borderWidth: 1,
                      borderRadius: 10,
                      ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE),
                      paddingHorizontal: Metrics.scale(15),
                      marginVertical: Metrics.verticalScale(10),
                    }}
                  />
                </TouchableOpacity>
                <H6
                  text="Select Opponent Team"
                  style={{...Fonts.Medium(Fonts.Size.xSmall, Colors.DARK_BLUE)}}
                />
                <TouchableOpacity onPress={toggleOpponentModal}>
                  <Input
                    rightIcon={<FaqsIcon />}
                    placeholder={'Select Opponent'}
                    placeholderTextColor={Colors.WHITE}
                    value={selectedOpponent}
                    isDisabled={true}
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: Colors.DARK_BLUE,
                      borderWidth: 1,
                      borderRadius: 10,
                      ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE),
                      paddingHorizontal: Metrics.scale(15),
                      marginVertical: Metrics.verticalScale(10),
                    }}
                  />
                </TouchableOpacity>

                {selectedTourney &&
                  selectedTeam &&
                  selectedDivision &&
                  selectedOpponent && (
                    <>
                      <H6
                        text="Select Date"
                        style={{
                          ...Fonts.Medium(Fonts.Size.xSmall, Colors.DARK_BLUE),
                        }}
                      />
                      <TouchableOpacity onPress={toggleDateModal}>
                        <Input
                          rightIcon={<FaqsIcon />}
                          placeholder={'Select Date'}
                          placeholderTextColor={Colors.WHITE}
                          value={selectedDate}
                          isDisabled={true}
                          style={{
                            backgroundColor: 'transparent',
                            borderColor: Colors.DARK_BLUE,
                            borderWidth: 1,
                            borderRadius: 10,
                            ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE),
                            paddingHorizontal: Metrics.scale(15),
                            marginVertical: Metrics.verticalScale(10),
                          }}
                        />
                      </TouchableOpacity>
                    </>
                  )}

                {selectedDate && (
                  <ButtonView
                    onPress={handlePressConfirmSelection}
                    style={{
                      alignItems: 'center',
                      backgroundColor: Colors.DARK_BLUE,
                      padding: 10,
                      marginTop: Metrics.doubleBaseMargin,
                      borderRadius: Metrics.smallMargin,
                    }}>
                    <H4
                      text="Confirm Selection"
                      style={{
                        ...Fonts.Bold(Fonts.Size.medium, Colors.DARK_BLACK),
                      }}
                    />
                  </ButtonView>
                )}
              </>
            );
          }}
        </FormHandler>
      </View>
      <CustomSelectionModal
        isModalVisible={isTourneyModalVisible}
        handleSelection={handleTourneySelection}
        title={'Select Tournament'}
        handleDropOffPress={handleTourneyDrop}
        modalData={getTournamentData?.data}
      />
      <CustomSelectionModal
        isModalVisible={isTeamModalVisible}
        handleSelection={handleTeamSelection}
        title={'Select Team'}
        handleDropOffPress={handleTeamDrop}
        modalData={getTeamData?.data}
      />
      <CustomSelectionModal
        isModalVisible={isDivisionModalVisible}
        handleSelection={handleDivisionSelection}
        title={'Select Division'}
        handleDropOffPress={handleDivisionDrop}
        modalData={getDivisionData?.data}
      />
      <CustomSelectionModal
        isModalVisible={isOpponentModalVisible}
        handleSelection={handleOpponentSelection}
        title={'Select Opponent'}
        handleDropOffPress={handleOpponenentDrop}
        modalData={getTeamData?.data}
      />
      <CustomSelectionDateModal
        isModalVisible={isDateModalVisible}
        handleSelection={handleDateSelection}
        title={'Select Date'}
        handleDropOffPress={handleDateDrop}
        modalData={getDateData?.data}
      />
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    paddingTop: Metrics.verticalScale(25),
    paddingBottom: Metrics.verticalScale(25),
    paddingHorizontal: Metrics.verticalScale(18),
    backgroundColor: Colors.FAMILY_BACKGROUND,
    marginHorizontal: Metrics.scale(10),
    borderRadius: Metrics.scale(15),
    justifyContent: 'center',
    // alignItems:'center'
  },
  buttonView: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: Metrics.baseMargin,
    justifyContent: 'space-around',
    marginTop: Metrics.verticalScale(10),
  },
  text: {
    alignSelf: 'center',
    ...Fonts.SemiBold(Fonts.Size.small, Colors.BLACK),
  },
  btnWrapper: {
    paddingHorizontal: Metrics.scale(30),
    paddingVertical: Metrics.verticalScale(8),
    borderRadius: Metrics.scale(10),
    borderWidth: Metrics.scale(1),
    borderColor: Colors.GREY_BORDER,
    justifyContent: 'center',
    backgroundColor: Colors.ICE_BLUE,
  },
  title: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
    marginBottom: Metrics.verticalScale(15),
    textAlign: 'center',
  },
  confirmText: {
    textAlign: 'center',
    marginBottom: Metrics.verticalScale(20),
    ...Fonts.SemiBold(Fonts.Size.normal, Colors.WHITE),
  },
});

export default ManagerModal;
