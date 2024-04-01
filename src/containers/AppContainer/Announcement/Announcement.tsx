import { ImageBackgroundPNG } from '@Asset/logo'
import Header from '@Component/AppHeader'
import ButtonView from '@Component/ButtonView'
import FlatListHandler from '@Component/FlatlistHandler'
import H5 from '@Component/Headings/H5'
import H6 from '@Component/Headings/H6'
import H7 from '@Component/Headings/H7'
import SpinnerLoader from '@Component/SmallLoader'
import { Colors } from '@Theme/Colors'
import Metrics from '@Utility/Metrics'
import React from 'react'
import { ImageBackground, Linking, StyleSheet, View } from 'react-native'
import useHomeScreenContainer from '../Home/HomeScreenContainer'

const Announcement = () => {
  const {
    getAllAnnouncements,
    getAllAnnouncementsLoading
  } = useHomeScreenContainer();

  const handlePressRegisterEvent = (url) => {
    Linking.openURL(url)
  }

  const renderItem = ({item}: any) => {
    return(
      <AnnouncementComp Announcement={item?.Announcement} Details={item?.Details} url={() => handlePressRegisterEvent(item?.url_to_show)}/>
    )
  }

  return (
    <View style={{backgroundColor:Colors.APP_BACKGROUND,flex:1}}>
        <Header title="Announcements"/>
        {getAllAnnouncementsLoading ?  <SpinnerLoader size={'large'} color={'#09203F'} /> :
<View style={{marginHorizontal:Metrics.baseMargin,marginTop:Metrics.baseMargin}}>
<FlatListHandler
            renderItem={renderItem}
            data={getAllAnnouncements?.data || {}}
            keyExtractor={item => item?.id}
          />
  </View>

        }
    </View>
  )
}

const AnnouncementComp=({Announcement,Details,url}:any)=>{
    return(
        <ImageBackground
        source={ImageBackgroundPNG}
        resizeMode="cover"
        style={{height: 100, marginTop: Metrics.baseMargin,padding:Metrics.baseMargin,marginBottom:Metrics.baseMargin}}>
     <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center'}}>
       <H5
        style={{color: Colors.WHITE}}
          text={Announcement}
        />
        <ButtonView 
        onPress={url}
        style={{backgroundColor:Colors.ICE_BLUE,paddingHorizontal:Metrics.smallMargin,paddingVertical:Metrics.baseMargin,borderRadius:10}}>
        <H6
        style={{color: Colors.BUTTON_LIGHT_GREY}}
          text="Register Now"
        />
        </ButtonView>
       </View>

         <View style={{flexDirection: 'row',marginTop:Metrics.baseMargin}}>
              <H7
                text={Details}
                style={{color: Colors.ICE_BLUE,}}
              />
              {/* <H7 text="20 Feb, 2024" style={{color: Colors.WHITE,}} /> */}
            </View>
      </ImageBackground>
    )
}

export default Announcement

const styles = StyleSheet.create({})