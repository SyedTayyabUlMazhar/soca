import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@Theme/Colors'
import Header from '@Component/AppHeader'
import ButtonView from '@Component/ButtonView'
import H1 from '@Component/Headings/H1'
import H6 from '@Component/Headings/H6'
import Metrics from '@Utility/Metrics'
import H7 from '@Component/Headings/H7'
import Fonts from '@Theme/Fonts'
import FlatListHandler from '@Component/FlatlistHandler'

const numberOfEntries = 10; // Example number

// Define the default values for each field
const defaultPlayerData = {
    title: "00/00",
    best: "$00.00",
    year: "View"
};

// Create an array and fill it with the default player data
const playerDataArray = new Array(numberOfEntries).fill(defaultPlayerData);

const PaymentPending = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item?.title}</Text>
      <Text style={styles.cell}>{item?.best}</Text>
      <Text style={styles.cell}>{item?.Hours}</Text>
     <ButtonView style={styles.btnCell}>
            <H7 text={item?.year} style={{alignSelf:'center',color:Colors.WHITE,paddingVertical:5,paddingHorizontal:-5}}/>
     </ButtonView>
    </View>
  );
  return (
    <View style={{flex:1,backgroundColor:Colors.APP_BACKGROUND}}>
   <Header title="Payments Pending"/>
   <View style={styles.playerWrapper}>
                <FlatListHandler
                    data={playerDataArray}
                    renderItem={renderItem}
                    ListHeaderComponent={() => (
                        <View style={styles.row}>
                          <Text style={styles.heading}>Due Date</Text>
                          <Text style={styles.heading}>Amount</Text>
                          <Text style={styles.heading}>Notes</Text>
                        </View>
                      )}
                />
            </View>
   <View style={{justifyContent:'space-between',marginTop:"auto",flexDirection:'row',marginHorizontal:Metrics.scale(20),marginBottom:Metrics.verticalScale(20)}}>
    <View style={{alignItems:'center'}}>
      <H6 text="Total Amount" style={{color:Colors.TEXT_COLOR}}/>
      <H6 text="$000.00" style={{color:Colors.WHITE}}/>
    </View>
        <ButtonView style={{backgroundColor:Colors.ICE_BLUE,justifyContent:'center',padding:Metrics.baseMargin,paddingHorizontal:40,borderRadius:6}}>
            <H6 text="Pay Now" style={{...Fonts.SemiBold(Fonts.Size.xSmall, Colors.BLACK)}}/>
        </ButtonView>
   </View>
    </View>
  )
}

export default PaymentPending

const styles = StyleSheet.create({
  playerWrapper: {
    backgroundColor: Colors.FAMILY_BACKGROUND,
    paddingHorizontal: Metrics.scale(13),
    paddingVertical: Metrics.scale(16),
    borderRadius: 16,
    marginHorizontal:Metrics.scale(20),marginTop:Metrics.doubleBaseMargin
},
row: {
  flexDirection: 'row',
  // borderBottomWidth: 1,
  // borderColor: '#ccc',
  paddingVertical: 10,
},
heading: {
  flex: 1,
  fontWeight: 'bold',
  textAlign: 'center',
  color:Colors.DARK_BLUE
},
cell: {
  flex: 1,
  textAlign: 'center',
  color:Colors.WHITE,
  height:'150%'
},
btnCell: {
  flex: 1,
  marginTop:-5,
  textAlign: 'center',
  color:Colors.WHITE,
  borderRadius:10,
  borderWidth:1,
  borderColor:Colors.DARK_BLUE,
  backgroundColor:Colors.APP_BACKGROUND
},
})