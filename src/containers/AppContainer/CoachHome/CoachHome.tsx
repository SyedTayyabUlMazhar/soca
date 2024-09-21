import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import TopTabs from '@Component/Tabs/TopTabs'
import { coachTabs } from '@Constants/dummyData'
import Header from '@Component/AppHeader'
import { Colors } from '@Theme/index'
import useCoachContainer from './CoachContainer'
import { setItem } from '@Service/storageService'
import { STORAGE_KEYS } from '@Constants/queryKeys'
import loginContext from '@Context/loginContext'
import { LoginContext } from '@Context/loginContext/types'
import CustomModal from '@Component/CustomModal/CustomModal'
import ButtonView from '@Component/ButtonView'
import { SignoutSvg } from '@Asset/logo'

const CoachHome = ({route}) => {
  const {parentId}=route?.params|| {}  
  setItem(STORAGE_KEYS.GET_COACH_ID,parentId);
  const {coachData,coachBatch}=useCoachContainer()  
  const coachParam=coachBatch?.data[0]
  const {Coach_name}=coachBatch?.data[0]||{}
  const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
  React.useState(false);
const {handleLogoutUser} = useContext(loginContext) as LoginContext;
const changeDeleteModalVisible = isDelete => {
  if (isDelete == true) {
    setIsDeleteAccountVisible(!isDeleteAccountVisible);
    handleLogoutUser();
  } else {
    setIsDeleteAccountVisible(!isDeleteAccountVisible);
  }
};
  return (
    <View style={{flex: 1, backgroundColor: Colors.Colors.APP_BACKGROUND}}>
         <Header
        backButton={true}
        subText={'Welcome Back'}
        desc={Coach_name}
        actionButton={
          <ButtonView onPress={() => setIsDeleteAccountVisible(true)}>
            <SignoutSvg />
          </ButtonView>
        }
      />
         <TopTabs component={coachTabs} coachBatch={coachParam}/>
         <CustomModal
          changeDeleteModalVisible={changeDeleteModalVisible}
          setIsDeleteAccountVisible={setIsDeleteAccountVisible}
          isDeleteAccountVisible={isDeleteAccountVisible}
          title={'Logout'}
          desc={'Are you sure you want to logout?'}
        />
    </View>
  )
}

export default CoachHome

const styles = StyleSheet.create({})