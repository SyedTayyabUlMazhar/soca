import {CancelSmallIcon, FaqsIcon, PresentIcon, Search} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H2 from '@Component/Headings/H2';
import H3 from '@Component/Headings/H3';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import TeamSelectionModal from '@Component/TeamSelectionModal';
import {COACH_PLAYER_TODAY_ATTENDANCE} from '@Constants/constants';
import {useBoundStore} from '@Store/index';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import useCoachContainer from './CoachContainer';

const CoachAttendance = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

 
  const coachAttendacnZustand = useBoundStore(
    (state: any) => state.coachAttendacnZustand,
  );
  const {getCoachAttendacneList, updateCoachAttendanceListMutate} =
    useCoachContainer();
    
    const filteredPlayers = coachAttendacnZustand?.data?.filter(player =>
      player.plyr_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
    <View style={{backgroundColor: Colors.Colors.APP_BACKGROUND, flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: Metrics.scale(23),
        }}>
        <TodayPlayerAttendance
          getCoachAttendacneList={coachAttendacnZustand}
          updateCoachAttendanceListMutate={updateCoachAttendanceListMutate}
          searchQuery={searchQuery}
          onSearch={handleSearch}
          filteredPlayers={filteredPlayers}
        />
      </ScrollView>
    </View>
  );
};

const TodayPlayerAttendance = ({
  getCoachAttendacneList,
  updateCoachAttendanceListMutate,
  searchQuery,
  onSearch,
  filteredPlayers,
}: any) => {
  const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);
  const [state, setState] = React.useState();

  const changeDeleteModalVisible = value => {
    setState(value);
  };

  const handlePressMarkAttendance = (isPresent, playerData) => {

    const payload = {
      attendance: isPresent,
      coachId: playerData?.Coach_Id,
      playerId: playerData?.Player_id,
    };
    updateCoachAttendanceListMutate(payload);
  };

  const renderPlayerAttendance = ({item}: any) => {
    return (
      <View style={styles.playerAttendanceRenderWrapper}>
        <H3 text={item?.plyr_name} style={styles.playerName} />
        <View style={styles.playerAttendanceActionWrapper}>
          {item['Attendance (Y/N)'] == COACH_PLAYER_TODAY_ATTENDANCE.PRESENT ? (
            <View style={styles.presentWrapper}>
              <PresentIcon />
              <H5 style={styles.presentText} text="Present Marked" />
            </View>
          ) : item['Attendance (Y/N)'] ==
            COACH_PLAYER_TODAY_ATTENDANCE.ABSENT ? (
            <View style={styles.presentWrapper}>
              <CancelSmallIcon />
              <H5 style={styles.presentText} text="Absent Marked" />
            </View>
          ) : (
            <View style={styles.actionBtnWrapper}>
              <ButtonView
                style={styles.actionBtn}
                onPress={() =>
                  handlePressMarkAttendance(
                    COACH_PLAYER_TODAY_ATTENDANCE.PRESENT,
                    item,
                  )
                }>
                <PresentIcon />
                <H5 text="Present" style={styles.actionBtnText} />
              </ButtonView>
              <ButtonView
                style={styles.actionBtn}
                onPress={() =>
                  handlePressMarkAttendance(
                    COACH_PLAYER_TODAY_ATTENDANCE.ABSENT,
                    item,
                  )
                }>
                <CancelSmallIcon />
                <H5 text="Absent" style={styles.actionBtnText} />
              </ButtonView>
            </View>
          )}
        </View>
      </View>
    );
  };

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
            state
              ? `${state?.dob}, ${state?.tourney}, ${state?.team}`
              : 'Select Date, Tournament, Team'
          }
          style={{color: Colors.Colors.WHITE}}
        />
        <FaqsIcon />
      </ButtonView>
      <H2
        text="Today’s Players Attendance"
        style={styles.todayPlayerAttendancTitle}
      />
      <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search players..."
        placeholderTextColor={Colors.Colors.GREY}
        value={searchQuery}
        onChangeText={onSearch}
      />
      <Search style={{position:'absolute', right:20, top:15}}/>
      </View>
 
      <View style={styles.playerWrapper}>
        
        <FlatListHandler
          data={filteredPlayers}
          renderItem={renderPlayerAttendance}
        />
      </View>
      <TeamSelectionModal
        changeDeleteModalVisible={changeDeleteModalVisible}
        setIsDeleteAccountVisible={setIsDeleteAccountVisible}
        isDeleteAccountVisible={isDeleteAccountVisible}
        title={'Logout'}
        desc={'Are you sure you want to logout?'}
      />
    </View>
  );
};

export default CoachAttendance;

const styles = StyleSheet.create({
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
  searchInput: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.WHITE),
    borderColor: Colors.Colors.DARK_BLUE,
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: Metrics.scale(10),
    marginBottom: Metrics.scale(15),
  },
});
