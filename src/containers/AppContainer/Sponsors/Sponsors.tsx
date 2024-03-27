import {
    GoldTrophy,
    PlatiniumTrophy,
    SelectedPackage,
    SilverTrophy
  } from '@Asset/logo';
  import Header from '@Component/AppHeader';
  import H2 from '@Component/Headings/H2';
  import H3 from '@Component/Headings/H3';
  import H4 from '@Component/Headings/H4';
  import H6 from '@Component/Headings/H6';
  import Fonts from '@Theme/Fonts';
  import { Colors } from '@Theme/index';
  import Metrics from '@Utility/Metrics';
  import React from 'react';
  import {
    ScrollView,
    StyleSheet,
    Text,
    View
  } from 'react-native';
import useSponsorsContainer from './SponsorsContainer';
import FlatListHandler from '@Component/FlatlistHandler';
const Sponsors = () => {
    const{getSponsorsData}=useSponsorsContainer()
  console.log(getSponsorsData,'getSponsorsDatagetSponsorsDatagetSponsorsData');
  const renderItem=({item})=>{
    return(
        <View style={styles.packageBoxWrapper}>
        <View style={styles.packageBoxInnerWrapper}>
          <H2 text={item?.type} style={styles.tierNameText} />
          <View style={styles.unOrderList}>
            <View style={styles.smallDot} />
            <Text style={styles.tierTagline}><H6 text='Sponsors:' style={styles.tierTaglineLabel} /> {item?.sponsor}</Text>
          </View>
         
        </View>
        <View style={styles.trophyWrapper}>
    {item?.type==="Platinum" && <PlatiniumTrophy/> }
    {item?.type==="Gold" && <GoldTrophy/> }
    {item?.type==="Silver" &&  <SilverTrophy /> }
         
        </View>
      </View>
    )
  }
  return (
<View style={{backgroundColor: Colors.Colors.APP_BACKGROUND, flex: 1 }}>
      <Header backButton={true} title={"Sponsors"} />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: Metrics.scale(23) }}>
            <FlatListHandler
                data={getSponsorsData?.data}
                renderItem={renderItem}
            />
  
      </ScrollView>
    </View>
  )
}

export default Sponsors

const styles = StyleSheet.create({
    headingWrapper: {
      marginBottom: Metrics.scale(17)
    },
    monthText: {
      ...Fonts.Bold(Fonts.Size.medium, Colors.Colors.WHITE),
      marginBottom: Metrics.scale(2)
    },
    monthTagline: {
      ...Fonts.Bold(Fonts.Size.xSmall, "#98D8FA")
    },
    tierTEXt: {
      ...Fonts.Bold(Fonts.Size.xSmall, "#FFC802")
    },
    packageBoxWrapper: {
      borderWidth: 1,
      borderColor: "#AEAEAE",
      borderRadius: 10,
      paddingTop: 10,
      paddingLeft: 13,
      paddingBottom: 19,
      backgroundColor: '#0A182C',
      marginBottom: Metrics.scale(17)
    },
    tierNameText: {
      ...Fonts.Medium(Fonts.Size.large, Colors.Colors.WHITE),
      marginBottom: 12
    },
    tierTagline: {
      ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.WHITE),
      marginLeft: 5,
      lineHeight: 15
    },
    tierTaglineLabel: {
      ...Fonts.Medium(Fonts.Size.xxxSmall, "#00B2FF"),
    },
    packageBoxInnerWrapper: {
      width: '90%'
    },
    trophyWrapper: {
      position: 'absolute',
      right: Metrics.scale(14),
      top: Metrics.scale(10)
    },
    selectedPkgIcon: {
      position: 'absolute',
      right: -7,
      top: Metrics.scale(-5)
    },
    smallDot: {
      backgroundColor: "#00B2FF",
      width: Metrics.scale(5),
      height: Metrics.scale(5),
      borderRadius: 50,
      marginTop: 6
    },
    unOrderList: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 7
    },
    infoTextWrapper: {
      marginTop: Metrics.scale(3)
    },
    infoText: {
      ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.WHITE),
      lineHeight: 15
    }
  });