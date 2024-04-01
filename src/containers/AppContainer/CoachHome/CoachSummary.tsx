import { CancelSmallIcon, FaqsIcon, GroupSvg, PresentIcon, PrivateSvg } from '@Asset/logo'
import ButtonView from '@Component/ButtonView'
import CustomModal from '@Component/CustomModal/CustomModal'
import FlatListHandler from '@Component/FlatlistHandler'
import H2 from '@Component/Headings/H2'
import H3 from '@Component/Headings/H3'
import H5 from '@Component/Headings/H5'
import H6 from '@Component/Headings/H6'
import H7 from '@Component/Headings/H7'
import ProgressCircleWithSVG from '@Component/PorgressCircle/ProgressCircleWithSvg'
import TeamSelectionModal from '@Component/TeamSelectionModal'
import { COACH_PLAYER_TODAY_ATTENDANCE } from '@Constants/constants'
import { PLAYER_ATTENDANCE_SHEET, SessionData } from '@Constants/dummyData'
import { Colors } from '@Theme/Colors'
import Fonts from '@Theme/Fonts'
import Metrics from '@Utility/Metrics'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import useCoachContainer from './CoachContainer'
import { STORAGE_KEYS } from '@Constants/queryKeys'
import { getItem } from '@Service/storageService'

const CoachSummary = ({route}) => {
    
    const {grp_ssns_hrs,pvt_ssn_hrs}=route?.params || {}
    const parentId = getItem(STORAGE_KEYS.PARENTID);
    
    const {coachActivityData}=useCoachContainer(parentId)
    
    
    return (
        <View style={{ backgroundColor: Colors.APP_BACKGROUND, flex: 1 }}>
            
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 15, }}>
                <TodayPlayerAttendance groupHour={grp_ssns_hrs} privateHour={pvt_ssn_hrs} coachActivityData={coachActivityData}/>
            </ScrollView>
        </View>
    )
}

const TodayPlayerAttendance = ({groupHour,privateHour,coachActivityData}) => {
    const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);
    const changeDeleteModalVisible = isDelete => {
        if (isDelete == true) {
          setIsDeleteAccountVisible(!isDeleteAccountVisible);
        } else {
          setIsDeleteAccountVisible(!isDeleteAccountVisible);
        }
      };
    const renderItem = ({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item?.["Session Date"]}</Text>
          <Text style={styles.cell}>{item?.["Session Type"]}</Text>
          <Text style={styles.cell}>{item?.Hours}</Text>
         <ButtonView style={styles.btnCell}>
                <H7 text={item?.Comments} style={{alignSelf:'center',color:Colors.WHITE,paddingVertical:5,paddingHorizontal:-5}}/>
         </ButtonView>
        </View>
      );

    return (
        <View style={styles.todayPlayerAttendanceWrapper}>
            <H2 text="Coaching Summary" style={styles.todayPlayerAttendancTitle} />
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginBottom:-50}}>
            <View style={{paddingHorizontal:Metrics.baseMargin,height:"60%",width:'48%',flexDirection:"row",alignItems:'center',borderWidth:2,borderColor:Colors.DARK_BLUE,borderRadius:15}}>
                <View>
                <H3 text={groupHour} style={{color:Colors.WHITE}}/>
             <H7 text="Groups" style={{color:Colors.DARK_BLUE}}/>   
                </View>
                <View>
                <ProgressCircleWithSVG progress={groupHour ? groupHour/100 : null} svg={<GroupSvg/>}/>

                </View>
                
            </View>
            <View style={{paddingHorizontal:Metrics.baseMargin,height:"60%",width:'48%',flexDirection:"row",alignItems:'center',borderWidth:2,borderColor:Colors.DARK_BLUE,borderRadius:15}}>
                <View>
                <H3 text={privateHour} style={{color:Colors.WHITE}}/>
             <H7 text="Private" style={{color:Colors.DARK_BLUE}}/>   
                </View>
                <View>
                <ProgressCircleWithSVG progress={privateHour ? privateHour/100 : null} svg={<PrivateSvg/>}/>

                </View>
                
            </View>
            </View>
    
            {/* <ButtonView onPress={()=>setIsDeleteAccountVisible(true)} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:1,borderColor:Colors.DARK_BLUE,padding:12,borderRadius:20}} >
                <H6 text="06 Feb, Tournament, Team, Game"  style={{color:Colors.WHITE}}/>
                <FaqsIcon/>
            </ButtonView> */}
            <H2 text="Coaching Sessions Details" style={styles.coachingTxt} />
            <View style={styles.playerWrapper}>
                <FlatListHandler
                    data={coachActivityData?.data}
                    renderItem={renderItem}
                    ListHeaderComponent={() => (
                        <View style={styles.row}>
                          <Text style={styles.heading}>Date</Text>
                          <Text style={styles.heading}>Session</Text>
                          <Text style={styles.heading}>Duration</Text>
                          <Text style={styles.heading}>Notes</Text>
                        </View>
                      )}
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


export default CoachSummary

const styles = StyleSheet.create({
    todayPlayerAttendanceWrapper: {
        marginTop: Metrics.scale(28),
        marginBottom: Metrics.scale(25),
    },
    todayPlayerAttendancTitle: {
        ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
        marginBottom: Metrics.scale(13),
    },
    coachingTxt: {
        ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
        marginTop: Metrics.doubleBaseMargin,
        marginBottom:Metrics.verticalScale(15)
    },
    playerWrapper: {
        backgroundColor: Colors.FAMILY_BACKGROUND,
        paddingHorizontal: Metrics.scale(13),
        paddingVertical: Metrics.scale(16),
        borderRadius: 16,
    },
    playerName: {
        ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE),
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
        ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.DARK_BLUE),
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
        borderColor: Colors.DARK_BLUE,
        paddingHorizontal: Metrics.scale(10),
        paddingVertical: Metrics.scale(5),
        borderRadius: 100
    },
    actionBtnText: {
        ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.WHITE),
        marginLeft: Metrics.scale(5)
    },
    actionBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    },
})