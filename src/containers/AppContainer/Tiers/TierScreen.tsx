import {
  AwardGoldSvg,
  AwardPlatinumSvg,
  AwardSilverSvg,
  AwardSvg,
  FaqsIcon,
  FaqsIcon2,
  GoldTrophy,
  PlatiniumTrophy,
  SelectedPackage,
  SilverTrophy
} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H1 from '@Component/Headings/H1';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import SpinnerLoader from '@Component/SmallLoader';
import { FaqsList } from '@Constants/dummyData';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {
  LayoutAnimation,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useTierContainer from './TierContainer';
import Header from '@Component/AppHeader';
import H3 from '@Component/Headings/H3';
import H4 from '@Component/Headings/H4';
import { Colors } from '@Theme/index';
import H2 from '@Component/Headings/H2';

const TierScreen = () => {
  const { getTierData, isLoading } = useTierContainer();

console.log(getTierData?.message[1],'getTierDatagetTierDatagetTierDatagetTierData');
const SilverData=getTierData?.message[1]
const GoldData=getTierData?.message[2]
const PlatinumData=getTierData?.message[3]
  return (
    <View style={{backgroundColor: Colors.Colors.APP_BACKGROUND, flex: 1 }}>
      <Header backButton={false} desc={"Tiers"} />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: Metrics.scale(23) }}>
        <TiersInfoWrapper />
        <SilverPkg SilverData={SilverData}/>
        <GoldPkg GoldData={GoldData}/>
        <PlatinumPkg PlatinumData={PlatinumData}/>
        <InfoText />
      </ScrollView>
    </View>
  );
};

const TiersInfoWrapper = () => {
  return (
    <View style={styles.headingWrapper}>
      <H3 text='3 Months' style={styles.monthText} />
      <Text style={styles.monthTagline}>left to unlock <H4 text='Gold' style={styles.tierTEXt} /> Tier</Text>
    </View>
  )
}

const SilverPkg = ({SilverData}:any) => {
  console.log(SilverData,'SilverDataSilverDataSilverDataSilverDataSilverData');
  
  return (
    <View style={styles.packageBoxWrapper}>
      <View style={styles.packageBoxInnerWrapper}>
        <H2 text='Silver' style={styles.tierNameText} />
        <View style={styles.unOrderList}>
          <View style={styles.smallDot} />
          <Text style={styles.tierTagline}><H6 text='Benefits:' style={styles.tierTaglineLabel} /> {SilverData?.Benefits}</Text>
        </View>
        <View style={styles.unOrderList}>
          <View style={styles.smallDot} />
          <Text style={styles.tierTagline}><H6 text='Requirements:' style={styles.tierTaglineLabel} /> {SilverData?.Requirement}</Text>
        </View>
      </View>
      <View style={styles.trophyWrapper}>
        <View style={styles.selectedPkgIcon}>
          <SelectedPackage />
        </View>
        <SilverTrophy />
      </View>
    </View>
  )
}
const GoldPkg = ({GoldData}:any) => {

  return (
    <View style={[styles.packageBoxWrapper, {borderColor: "#FFC700"}]}>
      <View style={styles.packageBoxInnerWrapper}>
        <H2 text='Gold' style={styles.tierNameText} />
        <View style={styles.unOrderList}>
          <View style={styles.smallDot} />
          <Text style={styles.tierTagline}><H6 text='Benefits:' style={styles.tierTaglineLabel} /> {GoldData?.Benefits}</Text>
        </View>
        <View style={styles.unOrderList}>
          <View style={styles.smallDot} />
          <Text style={styles.tierTagline}><H6 text='Requirements:' style={styles.tierTaglineLabel} /> {GoldData?.Requirement}</Text>
        </View>
      </View>
      <View style={styles.trophyWrapper}>
        <GoldTrophy />
      </View>
    </View>
  )
}

const PlatinumPkg = ({PlatinumData}:any) => {
  return (
    <View style={[styles.packageBoxWrapper, {borderColor: Colors.Colors.WHITE}]}>
      <View style={styles.packageBoxInnerWrapper}>
        <H2 text='Platinum' style={styles.tierNameText} />
        <View style={styles.unOrderList}>
          <View style={styles.smallDot} />
          <Text style={styles.tierTagline}><H6 text='Benefits:' style={styles.tierTaglineLabel} /> {PlatinumData?.Benefits}</Text>
        </View>
        <View style={styles.unOrderList}>
          <View style={styles.smallDot} />
          <Text style={styles.tierTagline}><H6 text='Requirements:' style={styles.tierTaglineLabel} /> {PlatinumData?.Requirement}</Text>
        </View>
      </View>
      <View style={styles.trophyWrapper}>
        <PlatiniumTrophy />
      </View>
    </View>
  )
}

const InfoText = () => {
  return (
    <View style={styles.infoTextWrapper}>
      <Text style={styles.infoText}>A rich rewards programs enabling athletes to keep training with passion. SOCA believes that training regularly keeps the athletes focused and help realize their goals.
        SOCA Reward Program rewards athletes for commitment to training, fitness and playing tournaments</Text>
    </View>
  )
}

export default TierScreen;

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
