import { MinusSign, PlusSign } from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import useManagerContainer from './ManagerContainer';

interface ICustomModal {
    title?: string;
    desc?: string;
    changeDeleteModalVisible: Function;
    setIsDeleteAccountVisible: Function;
    isDeleteAccountVisible: boolean;
    isShowDesc?: boolean;
    isNetConnection?: boolean;
    primaryBtnTxt?: string;
    value?: number; // Assuming value is a number
    misRunOuts?:number
 
  }
  
  const RunsOutModal = ({
    changeDeleteModalVisible,
    setIsDeleteAccountVisible,
    isDeleteAccountVisible,
    isNetConnection = true,
    misRunOuts,

  }: ICustomModal) => {
    
    const [count, setCount] = useState(misRunOuts);
  const {updateFieldingSessionMutate}=useManagerContainer()
    const closeModal = (bool: boolean) => {
      changeDeleteModalVisible(bool);
    };
  
    const handleBackDrop = (bool: boolean) => {
      setIsDeleteAccountVisible(bool);
    };
  
    const increment = () => {
            setCount(prevCount => ++prevCount );
      };
    
      const decrement = () => {
        if (count > 0) {
          setCount(prevCount => prevCount - 1);
        }
      };

      const handlePressSubmit = () => {
        const payload = {
            mis_runouts: count,
        }
        updateFieldingSessionMutate(payload)
        setIsDeleteAccountVisible(false);
    }
    return (
      <ReactNativeModal
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        backdropOpacity={0.5}
        onBackdropPress={!isNetConnection ? null : () => handleBackDrop(false)}
        isVisible={isDeleteAccountVisible}
        backdropTransitionOutTiming={0}>
        <View style={styles.modal}>
          <View style={styles.container}>
            <H5 text="Mark Scorings" style={{ color: Colors.WHITE }} />
            <H6
              text="Set Scorings"
              style={{
                alignSelf: 'flex-start',
                color: Colors.TEXT_COLOR,
                marginTop: Metrics.baseMargin,
                marginHorizontal: Metrics.doubleBaseMargin,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: Colors.ICE_BLUE,
                padding: 10,
              }}>
              <ButtonView onPress={decrement}>
                <MinusSign />
              </ButtonView>
              <H6 text={count} style={{ marginHorizontal: 100, color: Colors.WHITE }} />
              <ButtonView onPress={increment}>
                <PlusSign />
              </ButtonView>
             
            </View>
            <ButtonView onPress={()=>handlePressSubmit()} style={{backgroundColor:Colors.ICE_BLUE, paddingHorizontal:60,padding:10,marginTop:20,borderRadius:5}}>
                <H5 text="Mark and Submit"/>
              </ButtonView>
          </View>
        </View>
      </ReactNativeModal>
    );
  };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:Metrics.baseMargin
  },
  modal: {
    paddingTop: Metrics.verticalScale(25),
    paddingBottom: Metrics.verticalScale(25),
    paddingHorizontal: Metrics.verticalScale(18),
    backgroundColor: Colors.FAMILY_BACKGROUND,
    marginHorizontal: Metrics.scale(10),
    borderRadius: Metrics.scale(15),
    justifyContent: 'center',
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
    backgroundColor:Colors.ICE_BLUE
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

export default RunsOutModal;
