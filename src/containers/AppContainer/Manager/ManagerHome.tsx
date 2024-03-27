import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTabs from '@Component/Tabs/TopTabs'
import { coachTabs, managerTabs } from '@Constants/dummyData'
import Header from '@Component/AppHeader'
import { Colors } from '@Theme/index'

const ManagerHome = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.Colors.APP_BACKGROUND}}>
         <Header
        title="Home"
        backButton={false}
        subText={'Welcome Back'}
        desc={"Zohaib"}
      />
         <TopTabs component={managerTabs} />
    </View>
  )
}

export default ManagerHome

const styles = StyleSheet.create({})