import {FaqsIcon, FaqsIcon2} from '@Asset/logo';
import Header from '@Component/AppHeader';
import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H6 from '@Component/Headings/H6';
import SpinnerLoader from '@Component/SmallLoader';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {LayoutAnimation, ScrollView, StyleSheet, View} from 'react-native';
import useFaqsContainer from './FaqsContainer';

const Faqs = () => {
  const {getFaqsData, getFaqsDataLoading} = useFaqsContainer();
  console.log(getFaqsData, 'getFaqsDatagetFaqsDatagetFaqsData');

  // Create an array of boolean values to represent the open/close state for each FAQ item
  const [isOpenArray, setIsOpenArray] = React.useState(
    Array(getFaqsData?.data?.length).fill(false),
  );

  const handleTogglePress = index => {
    // Create a copy of the isOpenArray and toggle the state for the clicked FAQ item
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];

    // Customize the animation duration (e.g., 400 milliseconds)
    const customLayoutAnimation = {
      duration: 400, // Adjust this value as needed
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.linear,
      },
    };

    setIsOpenArray(updatedIsOpenArray);
    LayoutAnimation.configureNext(customLayoutAnimation);
  };
  const renderItem = ({item, index}) => {
    const isDetails = isOpenArray[index]; // Get the open/close state for this FAQ item
    const {Question, Answer} = item || {};
    // Conditionally set the SVG component based on the tier
    //   if (Tier === 'Gold') {
    //     tierSvg = <AwardGoldSvg style={{height: 20, width: 20}} />;
    //   } else if (Tier === 'Platinum') {
    //     tierSvg = <AwardPlatinumSvg style={{height: 20, width: 20}} />;
    //   } else if (Tier === 'Silver') {
    //     tierSvg = <AwardSilverSvg style={{height: 20, width: 20}} />;
    //   } else if (Tier === 'Member') {
    //     tierSvg = <AwardSvg style={{height: 20, width: 20}} />;
    //   }
    return (
      <>
        {Question ? (
          <View
            style={{
              backgroundColor: Colors.FAMILY_BACKGROUND,
              paddingVertical: Metrics.verticalScale(30),
              paddingHorizontal: 20,
              marginVertical: Metrics.baseMargin,
              borderRadius: Metrics.scale(10),
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 2,
            }}>
            <ButtonView
              onPress={() => handleTogglePress(index)} // Pass the index to identify the clicked FAQ item
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <H6
                  text={Question}
                  style={{
                    color: Colors.TEXT_COLOR,
                    marginHorizontal: 2,
                    borderBottomWidth: isDetails ? 1 : 0,
                    paddingBottom: isDetails ? 10 : 0,
                    borderColor: Colors.TEXT_COLOR,
                  }}
                />
              </View>

              <View>{isDetails ? <FaqsIcon2 /> : <FaqsIcon />}</View>
            </ButtonView>
            {isDetails && (
              <View>
                {Answer && (
                  <H6
                    style={{
                      ...Fonts.Medium(Fonts.Size.small, Colors.WHITE_THREE),
                      marginTop: Metrics.baseMargin,
                      lineHeight: 30,
                    }}
                    text={Answer}
                  />
                )}
              </View>
            )}
          </View>
        ) : null}
      </>
    );
  };
  return (
    <>
      <Header title="General FAQs" />
      {getFaqsDataLoading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.APP_BACKGROUND,
            justifyContent: 'center',
          }}>
          <SpinnerLoader size={'large'} color={Colors.WHITE} />
        </View>
      ) : (
        <ScrollView style={{backgroundColor: Colors.APP_BACKGROUND, flex: 1}}>
          <View
            style={{
              marginHorizontal: 20,
            }}>
            <View style={{marginTop: Metrics.doubleBaseMargin}}>
              <FlatListHandler
                // data={FaqsList}
                data={getFaqsData?.data}
                keyExtractor={item => item?.id}
                renderItem={renderItem}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Faqs;

const styles = StyleSheet.create({});
