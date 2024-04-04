import {FaqsIcon} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H2 from '@Component/Headings/H2';
import H6 from '@Component/Headings/H6';
import TeamSelectionModal from '@Component/TeamSelectionModal';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import useManagerContainer from './ManagerContainer';
import ManagerModal from './ManagerModal';
import moment from 'moment';
import { useBoundStore } from '@Store/index';

const TeamAllocation = () => {
  const {managerData} = useManagerContainer();

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
  const {managerData} = useManagerContainer();
  const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);
  const [data, setData] = React.useState();
  // const [state, setState] = React.useState();
  const setManagerFilterZustand = useBoundStore(
    (state: any) => state.setManagerFilterZustand,
  );
  const managerFilterZustand = useBoundStore(
    (state: any) => state.managerFilterZustand,
  );
  const setManagerAllocationZustand = useBoundStore(
    (state: any) => state.setManagerAllocationZustand,
  );
  const managerAllocationZustand = useBoundStore(
    (state: any) => state.managerAllocationZustand,
  );
  console.log(managerAllocationZustand,'managerAllocationZustandmanagerAllocationZustandmanagerAllocationZustand');
  
  // const cbFunc = item => {
  //   // setData(item);
  //   setManagerAllocationZustand(item)
  // };
  const changeDeleteModalVisible = value => {
    setManagerFilterZustand(value)
  };

  // Extracting bat_pos and ovrs_qta from managerData and constructing tableData
  const tableData =
  managerAllocationZustand?.data?.map((player, index) => [
      player.plyr_name,
      player.bat_pos || '000',
      player.ovrs_qta || '000',
    ]) || [];

  // Inserting headings as the first row of tableData
  tableData.unshift(['Players', 'Batting Position', 'Bowling Quota']);

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
        text="Players Allocation in Game"
        style={styles.todayPlayerAttendancTitle}
      />
      <View style={styles.container}>
        {tableData.map((rowData, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <View
                key={cellIndex}
                style={[styles.cell, cellIndex === 0 && styles.emptyCell]}>
                <Text
                  style={[
                    styles.checkingText,
                    cellIndex === 0 && styles.firstCellLabel,
                    rowIndex === 0 && styles.headerText,
                  ]}>
                  {cellData}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      <ManagerModal
        changeDeleteModalVisible={changeDeleteModalVisible}
        setIsDeleteAccountVisible={setIsDeleteAccountVisible}
        // cbFunc={cbFunc}
        isDeleteAccountVisible={isDeleteAccountVisible}
        title={'Logout'}
        desc={'Are you sure you want to logout?'}
      />
    </View>
  );
};

export default TeamAllocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.Colors.FAMILY_BACKGROUND,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  emptyCell: {
    flex: 0.5, // Adjust width for empty cell
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
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.WHITE),
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
