import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';



interface ICustomModal {
  title?: string;
  desc?: string;
  handleDropOffPress: Function;
  handleSelection: Function;
  isModalVisible: boolean;
  modalData:any
}

const CustomSelectionModal = ({
    isModalVisible,
    handleSelection,
    title,
    handleDropOffPress,
    modalData
}: ICustomModal) => {
  console.log(modalData,'modalDatamodalDatamodalData');
  
  const refForm = React.useRef();
  const Sample=({item})=>{
    console.log(item?.["Opponent Teams"],"This is item");
    
    return(
        <TouchableOpacity
        key={item?.tournament_code || item?.id}
        
        onPress={() => handleSelection(item?.tournament_code || item?.team_name || item?.["Opponent Teams"] ||item?.div_name)}>
          
        <Text style={{ ...Fonts.Medium(Fonts.Size.small, Colors.WHITE),marginVertical:Metrics.smallMargin}}>{item?.tournament_code || item?.team_name ||item?.["Opponent Teams"] || `Division ${item?.div_name}` || item}</Text>
      </TouchableOpacity>
    )
  }
  return (
      <ReactNativeModal isVisible={isModalVisible} animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        backdropOpacity={0.7}
        onBackdropPress={() => handleDropOffPress(false)}
        backdropTransitionOutTiming={0}>
        <View style={styles.modal}>
          <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={{ ...Fonts.Medium(Fonts.Size.medium, Colors.DARK_BLUE),alignSelf:'center',marginBottom:Metrics.baseMargin}}>{title}</Text>
          {modalData?.map((item) => (
            <Sample item={item}/>
     
          ))}
          </ScrollView>
        </View>
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
    height:300,
    paddingVertical:20
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
    backgroundColor: Colors.ICE_BLUE
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

export default CustomSelectionModal;
