import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTabs from '@Component/Tabs/TopTabs'
import { coachTabs, managerTabs } from '@Constants/dummyData'
import Header from '@Component/AppHeader'
import { Colors } from '@Theme/index'
import useHomeScreenContainer from '../Home/HomeScreenContainer'

const ManagerHome = ({route}) => {
  const {parentId}=route?.params|| {}
  console.log(parentId,'This is player IOd');
  const {
    parentData
  } = useHomeScreenContainer(parentId);
  const ParentName = parentData?.map((elem) => 
    elem?.Parent_Name
);

  return (
    <View style={{flex: 1, backgroundColor: Colors.Colors.APP_BACKGROUND}}>
         <Header
        title="Home"
        backButton={false}
        subText={'Welcome Back'}
        desc={ParentName}
      />
         <TopTabs component={managerTabs} />
    </View>
  )
}

export default ManagerHome

const styles = StyleSheet.create({})