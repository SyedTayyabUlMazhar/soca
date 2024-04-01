import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTabs from '@Component/Tabs/TopTabs'
import { coachTabs } from '@Constants/dummyData'
import Header from '@Component/AppHeader'
import { Colors } from '@Theme/index'
import useCoachContainer from './CoachContainer'
import { setItem } from '@Service/storageService'
import { STORAGE_KEYS } from '@Constants/queryKeys'

const CoachHome = ({route}) => {
  const {parentId}=route?.params|| {}
  console.log(parentId,'This is player IOd');
  setItem(STORAGE_KEYS.GET_COACH_ID,parentId);
  const {coachData,coachBatch}=useCoachContainer()
  const coachParam=coachBatch?.data[0]
  const {Coach_name}=coachBatch?.data[0]||{}
  
  return (
    <View style={{flex: 1, backgroundColor: Colors.Colors.APP_BACKGROUND}}>
         <Header
        title="Home"
        backButton={false}
        subText={'Welcome Back'}
        desc={Coach_name}
      />
         <TopTabs component={coachTabs} coachBatch={coachParam}/>
    </View>
  )
}

export default CoachHome

const styles = StyleSheet.create({})