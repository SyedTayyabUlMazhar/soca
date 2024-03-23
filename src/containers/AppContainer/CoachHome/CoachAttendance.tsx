import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
    CancelSmallIcon,
    FaqsIcon,
    PresentIcon
} from '@Asset/logo';
import Header from '@Component/AppHeader';
import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H2 from '@Component/Headings/H2';
import H3 from '@Component/Headings/H3';
import H5 from '@Component/Headings/H5';
import { COACH_PLAYER_TODAY_ATTENDANCE } from '@Constants/constants';
import { PLAYER_ATTENDANCE_SHEET } from '@Constants/dummyData';
import { Colors, Fonts } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import { Text } from 'react-native-svg';
import H6 from '@Component/Headings/H6';
import TeamSelectionModal from '@Component/TeamSelectionModal';

const CoachAttendance = () => {
    return (
        <View style={{ backgroundColor: Colors.Colors.APP_BACKGROUND, flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: Metrics.scale(23) }}>
                <TodayPlayerAttendance />
            </ScrollView>
        </View>
    )
}

const TodayPlayerAttendance = () => {
    const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
        React.useState(false);
    const changeDeleteModalVisible = isDelete => {
        if (isDelete == true) {
            setIsDeleteAccountVisible(!isDeleteAccountVisible);
        } else {
            setIsDeleteAccountVisible(!isDeleteAccountVisible);
        }
    };
    const renderPlayerAttendance = ({ item }: any) => {
        return (
            <View style={styles.playerAttendanceRenderWrapper}>
                <H3 text={item?.playerName} style={styles.playerName} />
                <View style={styles.playerAttendanceActionWrapper}>
                    {item?.isPresent == COACH_PLAYER_TODAY_ATTENDANCE.PRESENT ?
                        (
                            <View style={styles.presentWrapper}>
                                <PresentIcon />
                                <H5 style={styles.presentText} text='Present Marked' />
                            </View>
                        ) :
                        item?.isPresent == COACH_PLAYER_TODAY_ATTENDANCE.ABSENT ? (
                            <View style={styles.presentWrapper}>
                                <CancelSmallIcon />
                                <H5 style={styles.presentText} text='Absent Marked' />
                            </View>
                        )
                            :
                            (
                                <View style={styles.actionBtnWrapper}>
                                    <ButtonView style={styles.actionBtn}>
                                        <PresentIcon />
                                        <H5 text='Present' style={styles.actionBtnText} />
                                    </ButtonView>
                                    <ButtonView style={styles.actionBtn}>
                                        <CancelSmallIcon />
                                        <H5 text='Absent' style={styles.actionBtnText} />
                                    </ButtonView>
                                </View>
                            )
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={styles.todayPlayerAttendanceWrapper}>

            <ButtonView onPress={() => setIsDeleteAccountVisible(true)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: Colors.Colors.DARK_BLUE, padding: 12, borderRadius: 20 }} >
                <H6 text="06 Feb, Tournament, Team, Game" style={{ color: Colors.Colors.WHITE }} />
                <FaqsIcon />
            </ButtonView>
            <H2 text="Today’s Players Attendance" style={styles.todayPlayerAttendancTitle} />
            <View style={styles.playerWrapper}>
                <FlatListHandler
                    data={PLAYER_ATTENDANCE_SHEET}
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

export default CoachAttendance

const styles = StyleSheet.create({
    todayPlayerAttendanceWrapper: {
        // marginTop: Metrics.scale(28),
        marginBottom: Metrics.scale(25),
    },
    todayPlayerAttendancTitle: {
        ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
        marginBottom: Metrics.scale(13),
        marginTop: Metrics.doubleBaseMargin
    },
    playerName: {
        ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.WHITE),
        width: '47%',
    },
    playerAttendanceRenderWrapper: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: Metrics.scale(22),
        alignItems: 'center'
    },
    presentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    presentText: {
        ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.DARK_BLUE),
        marginLeft: Metrics.scale(5)
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
        borderRadius: 100
    },
    actionBtnText: {
        ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.WHITE),
        marginLeft: Metrics.scale(5)
    },
    actionBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    playerWrapper: {
        backgroundColor: Colors.Colors.FAMILY_BACKGROUND,
        paddingHorizontal: Metrics.scale(13),
        paddingVertical: Metrics.scale(16),
        borderRadius: 16
    }
});