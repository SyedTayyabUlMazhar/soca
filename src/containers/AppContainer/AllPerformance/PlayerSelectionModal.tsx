import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View, FlatList } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import ButtonView from '@Component/ButtonView';
import H4 from '@Component/Headings/H4';
import H5 from '@Component/Headings/H5';
import { Colors } from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import Fonts from '@Theme/Fonts';
import { FemalePlayer, MalePlayer } from '@Asset/logo';

const PlayerSelectionModal = ({
  changeDeleteModalVisible,
  setIsDeleteAccountVisible,
  isDeleteAccountVisible,
  players // Array of players
  
}) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleSubmit = () => {
    changeDeleteModalVisible(selectedPlayer);
    setIsDeleteAccountVisible(false);
  };

  const handleBackDrop = (bool) => {
    setIsDeleteAccountVisible(bool);
  };

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  const renderItem = ({ item }) => (
    <ButtonView style={{  margin: 8, borderColor: selectedPlayer === item ? 'white' : 'transparent', borderWidth: 1 }} onPress={() => handlePlayerSelect(item)}>
      <ImageBackground
        source={item.player_gender === "Female" ? FemalePlayer : MalePlayer} // Assuming each player object has an 'image' property
        style={{ height: 150, justifyContent: 'flex-end', width: 150 }}
      >
        <H5 text={item.Player_Name} style={{ alignSelf: 'center', color: Colors.WHITE, marginBottom: Metrics.baseMargin }} />
      </ImageBackground>
    </ButtonView>
  );

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
        <H4 text="Select Player" style={{ color: Colors.WHITE }} />
        <FlatList
        horizontal
          data={players}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: Metrics.doubleBaseMargin }}
        />
        <ButtonView onPress={handleSubmit} style={{ alignItems: "center", backgroundColor: Colors.DARK_BLUE, padding: 10, marginTop: Metrics.doubleBaseMargin, borderRadius: Metrics.smallMargin, width: '85%' }}>
          <H4 text="Confirm Selection" style={{ ...Fonts.Medium(Fonts.Size.medium, Colors.DARK_BLACK), }} />
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
});

export default PlayerSelectionModal;
