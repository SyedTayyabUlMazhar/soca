import {FaqsIcon} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H2 from '@Component/Headings/H2';
import H6 from '@Component/Headings/H6';
import TeamSelectionModal from '@Component/TeamSelectionModal';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ManagerModal from './ManagerModal';
import useManagerContainer from './ManagerContainer';
import CustomModal from '@Component/CustomModal/CustomModal';
import IncreamentModal from './IcreamentModal';
import MisfieldsModal from './MisfieldsModal';
import RunsOutModal from './RunOutsModal';
import FullTossModal from './FullTossModal';
import ShortBallsModal from './ShortBallsModal';
import { useBoundStore } from '@Store/index';
import moment from 'moment';

const FieldingSession = () => {
  return (
    <View style={{backgroundColor: Colors.Colors.APP_BACKGROUND, flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: Metrics.scale(23),
        }}>
        <PlayerAllocationInGame />
      </ScrollView>
    </View>
  );
};

const PlayerAllocationInGame = () => {
  const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);
    const [isMisfieldsModalVisible, setIsMisfieldsModalVisible] = React.useState(false);
    const [isRunOutsModalVisible, setIsRunOutsModalVisible] = React.useState(false);
    const [isFullTossModalVisible, setIsFullTossModalVisible] = React.useState(false);
    const [isShortBallsModalVisible, setIsShortBallsModalVisible] = React.useState(false)
    const [data, setData] = React.useState();
  const changeDeleteModalVisible = value => {

    setManagerFilterZustand(value)
  };
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const setManagerFilterZustand = useBoundStore(
    (state: any) => state.setManagerFilterZustand,
  );
  const handleCallback = value => {
    setIsModalVisible(value);
  
  };
  const managerFilterZustand = useBoundStore(
    (state: any) => state.managerFilterZustand,
  );

  const CallbackFuntion = item => {
    setData(item)
  };

  
  const {getSessionData, updateSession} = useManagerContainer();


  const playerData = getSessionData?.data; // Assuming there are multiple players' data

  return (
    <View style={styles.todayPlayerAttendanceWrapper}>
      <ButtonView
        onPress={() => setIsDeleteAccountVisible(true)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.Colors.DARK_BLUE,
          padding: 12,
          borderRadius: 20,
        }}>
        <H6
           text={
            managerFilterZustand
              ? `${moment(managerFilterZustand?.date, 'M/D/YYYY').format('DD MMM')}, ${
                managerFilterZustand?.tourney
                }, ${managerFilterZustand?.team}, ${
                  managerFilterZustand?.opponent
                }, ${`Division ${managerFilterZustand?.div}`}`
              : 'Select Date, Tournament, Team, Opponent, Division'
          }
          style={{color: Colors.Colors.WHITE}}
        />
        <FaqsIcon />
      </ButtonView>
      <H2
        text="Players Fielding Scoring"
        style={styles.todayPlayerAttendancTitle}
      />
      <View style={styles.container}>
        {/* Render table headers */}
        <View style={styles.row}>
          <Text
            style={[
              styles.cell,
              styles.playerName,
              {
                ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.ICE_BLUE),
                marginRight: 10,
              },
            ]}>
            Players
          </Text>
          <Text
            style={[
              styles.cell,
              {...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.ICE_BLUE)},
            ]}>
            Drops
          </Text>
          <Text
            style={[
              styles.cell,
              {...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.ICE_BLUE)},
            ]}>
            Misfields
          </Text>
          <Text
            style={[
              styles.cell,
              {...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.ICE_BLUE)},
            ]}>
            ROs
          </Text>
          <Text
            style={[
              styles.cell,
              {...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.ICE_BLUE)},
            ]}>
            Full Toss
          </Text>
          <Text
            style={[
              styles.cell,
              {...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.ICE_BLUE)},
            ]}>
            Short
          </Text>
        </View>
        {/* Render player data */}
        {data?.data?.map((player, index) => (
          <View key={index} style={styles.row}>
            <Text
              style={[
                styles.cell,
                styles.playerName,
                {
                  ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.ICE_BLUE),
                  marginRight: 10,
                },
              ]}>{`Player ${index + 1}`}</Text>

            <Text
              onPress={() => setIsModalVisible(true)}
              style={[
                styles.cell,
                {
                  ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.WHITE),
                  borderColor: Colors.Colors.WHITE,
                  borderWidth: 1,
                },
              ]}>
              {player.catch_drops}
            </Text>
            <Text
            onPress={()=>setIsMisfieldsModalVisible(true)}
              style={[
                styles.cell,
                {
                  ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.WHITE),
                  borderColor: Colors.Colors.WHITE,
                  borderWidth: 1,
                },
              ]}>
              {player.misfields}
            </Text>
            <Text
            onPress={()=>setIsRunOutsModalVisible(true)}
              style={[
                styles.cell,
                {
                  ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.WHITE),
                  borderColor: Colors.Colors.WHITE,
                  borderWidth: 1,
                },
              ]}>
              {player.mis_runouts}
            </Text>
            <Text
            onPress={()=>setIsFullTossModalVisible(true)}
              style={[
                styles.cell,
                {
                  ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.WHITE),
                  borderColor: Colors.Colors.WHITE,
                  borderWidth: 1,
                },
              ]}>
              {player.full_toss}
            </Text>
            <Text
            onPress={()=>{setIsShortBallsModalVisible(true)}}
              style={[
                styles.cell,
                {
                  ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.WHITE),
                  borderColor: Colors.Colors.WHITE,
                  borderWidth: 1,
                },
              ]}>
              {player.short_balls}
            </Text>
            <IncreamentModal
              changeDeleteModalVisible={handleCallback}
              setIsDeleteAccountVisible={setIsModalVisible}
              isDeleteAccountVisible={isModalVisible}
              catchDrop={player.catch_drops} 
            />
                <MisfieldsModal
              changeDeleteModalVisible={handleCallback}
              setIsDeleteAccountVisible={setIsMisfieldsModalVisible}
              isDeleteAccountVisible={isMisfieldsModalVisible}
              misfields={player.misfields}
            />
            <RunsOutModal
              changeDeleteModalVisible={handleCallback}
              setIsDeleteAccountVisible={setIsRunOutsModalVisible}
              isDeleteAccountVisible={isRunOutsModalVisible}
              misRunOuts={player.mis_runouts}
            />
            <FullTossModal
              changeDeleteModalVisible={handleCallback}
              setIsDeleteAccountVisible={setIsFullTossModalVisible}
              isDeleteAccountVisible={isFullTossModalVisible}
              fullToss={player.full_toss}
            />
            <ShortBallsModal
              changeDeleteModalVisible={handleCallback}
              setIsDeleteAccountVisible={setIsShortBallsModalVisible}
              isDeleteAccountVisible={isShortBallsModalVisible}
              shortBalls={player.short_balls}
            />
          </View>
        ))}
      </View>
      <ManagerModal
        changeDeleteModalVisible={changeDeleteModalVisible}
        setIsDeleteAccountVisible={setIsDeleteAccountVisible}
        isDeleteAccountVisible={isDeleteAccountVisible}
        CallbackFuntion={CallbackFuntion}
      />
    </View>
  );
};

export default FieldingSession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.Colors.FAMILY_BACKGROUND,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyCell: {
    flex: 0.8, // Adjust width for empty cell
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  firstCellLabel: {
    ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.DARK_BLUE),
    flex: 1,
  },
  headerText: {
    ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.DARK_BLUE),
  },
  checkingText: {
    ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.WHITE),
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 4,
  },

  todayPlayerAttendanceWrapper: {
    // marginTop: Metrics.scale(28),
    marginBottom: Metrics.scale(25),
  },
  todayPlayerAttendancTitle: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
    marginBottom: Metrics.scale(13),
    marginTop: Metrics.doubleBaseMargin,
  },
  playerName: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.ICE_BLUE),
    width: '47%',
  },
  playerAttendanceRenderWrapper: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: Metrics.scale(22),
    alignItems: 'center',
  },
  presentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  presentText: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.DARK_BLUE),
    marginLeft: Metrics.scale(5),
  },
  playerAttendanceActionWrapper: {
    width: '53%',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.Colors.DARK_BLUE,
    paddingHorizontal: Metrics.scale(10),
    paddingVertical: Metrics.scale(5),
    borderRadius: 100,
  },
  actionBtnText: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.WHITE),
    marginLeft: Metrics.scale(5),
  },
  actionBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerWrapper: {
    backgroundColor: Colors.Colors.FAMILY_BACKGROUND,
    paddingHorizontal: Metrics.scale(13),
    paddingVertical: Metrics.scale(16),
    borderRadius: 16,
  },
});
