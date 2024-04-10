import ButtonView from '@Component/ButtonView';
import H3 from '@Component/Headings/H3';
import H4 from '@Component/Headings/H4';
import H5 from '@Component/Headings/H5';
import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import useAllPerformanceContainer from './AllPerformanceContainer';

const SelectYearModal = ({
  changeDeleteModalVisible,
  setIsDeleteAccountVisible,
  isDeleteAccountVisible,
  refetchPlayerPerformanceData
  
}) => {
const currentYear = new Date().getFullYear(); // Get the current year
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const handleSubmit = () => {
    refetchPlayerPerformanceData()
    changeDeleteModalVisible(selectedYear);
    setIsDeleteAccountVisible(false);
  };

  const handleBackDrop = (bool) => {
    setIsDeleteAccountVisible(bool);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  return (
    <ReactNativeModal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.5}
      onBackdropPress={() => handleBackDrop(false)}
      isVisible={isDeleteAccountVisible}
      backdropTransitionOutTiming={0}
    >
      <View style={styles.modal}>
        <H3 text="Select Year" style={{ color: Colors.WHITE }} />
        <ButtonView onPress={() => handleYearSelect(currentYear)} style={[styles.button, selectedYear === currentYear && styles.selectedButton]}>
          <H5 text="Current Year" style={{ color: Colors.WHITE }} />
        </ButtonView>
        <ButtonView onPress={() => handleYearSelect(currentYear - 1)} style={[styles.button, selectedYear === currentYear - 1 && styles.selectedButton]}>
          <H5 text="Last Year" style={{ color: Colors.WHITE }} />
        </ButtonView>
        <ButtonView onPress={handleSubmit} style={styles.confirmButton}>
          <H4 text="Confirm Selection" style={{ ...Fonts.Medium(Fonts.Size.medium, Colors.DARK_BLACK) }} />
        </ButtonView>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    paddingTop: Metrics.verticalScale(25),
    paddingBottom: Metrics.verticalScale(25),
    paddingHorizontal: Metrics.verticalScale(18),
    backgroundColor: Colors.FAMILY_BACKGROUND,
    marginHorizontal: Metrics.scale(10),
    borderRadius: Metrics.scale(15),
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.GREY,
    width: '85%',
    borderRadius: 8,
    alignItems: 'center',
    padding: 12,
    marginTop: Metrics.verticalScale(30),
  },
  selectedButton: {
    backgroundColor: "#040C1799", // Apply red background color for the selected year
    borderColor: Colors.DARK_BLUE,
  },
  confirmButton: {
    alignItems: 'center',
    backgroundColor: Colors.DARK_BLUE,
    padding: 10,
    marginTop: Metrics.verticalScale(30),
    borderRadius: Metrics.smallMargin,
    width: '85%',
  },
});

export default SelectYearModal;
