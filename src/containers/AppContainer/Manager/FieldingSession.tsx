import { FaqsIcon } from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H2 from '@Component/Headings/H2';
import H6 from '@Component/Headings/H6';
import TeamSelectionModal from '@Component/TeamSelectionModal';
import { Colors, Fonts } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ManagerModal from './ManagerModal';

const FieldingSession = () => {
    return (
        <View style={{ backgroundColor: Colors.Colors.APP_BACKGROUND, flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: Metrics.scale(23) }}>
                <PlayerAllocationInGame />
            </ScrollView>
        </View>
    )
}

const PlayerAllocationInGame = () => {
    const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);
    const changeDeleteModalVisible = isDelete => {
        if (isDelete == true) {
          setIsDeleteAccountVisible(!isDeleteAccountVisible);
        } else {
          setIsDeleteAccountVisible(!isDeleteAccountVisible);
        }
      };
    const tableData = [
        ['', 'Drops', 'Misfields','ROs', 'Full Toss','Shorts'],
        ['Player 1', '00', '00','00','00','00'],
        ['Player 2', '00', '00','00','00','00'],
        ['Player 3', '00', '00','00','00','00'],
        ['Player 4', '00', '00','00','00','00'],
        ['Player 5', '00', '00','00','00','00'],
        ['Player 6', '00', '00','00','00','00'],
        ['Player 7', '00', '00','00','00','00'],
        ['Player 8', '00', '00','00','00','00'],
        ['Player 9', '00', '00','00','00','00'],
        ['Player 10', '00', '00','00','00','00'],
        ['Player 11', '00', '00','00','00','00'],
        ['Player 12', '00', '00','00','00','00']
    ];
    return (
        <View style={styles.todayPlayerAttendanceWrapper}>
                   <ButtonView onPress={()=>setIsDeleteAccountVisible(true)} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:1,borderColor:Colors.Colors.DARK_BLUE,padding:12,borderRadius:20}} >
                <H6 text="06 Feb, Tournament, Team, Game"  style={{color:Colors.Colors.WHITE}}/>
                <FaqsIcon/>
            </ButtonView>
            <H2 text="Players Fielding Scoring" style={styles.todayPlayerAttendancTitle} />
            <View style={styles.container}>
                {tableData.map((rowData, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {rowData.map((cellData, cellIndex) => (
                            <View key={cellIndex} style={[styles.cell, cellIndex === 0 && styles.emptyCell]}>
                                <Text style={[styles.checkingText, cellIndex === 0 && styles.firstCellLabel, rowIndex === 0 && styles.headerText]}>{cellData}</Text>
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
       
            />
        </View>
    );
};

export default FieldingSession

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:Colors.Colors.FAMILY_BACKGROUND,
        borderRadius:10,
    
    },
    row: {
        flexDirection: 'row',
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
    },
    todayPlayerAttendanceWrapper: {
        // marginTop: Metrics.scale(28),
        marginBottom: Metrics.scale(25),
    },
    todayPlayerAttendancTitle: {
        ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
        marginBottom: Metrics.scale(13),
        marginTop:Metrics.doubleBaseMargin
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