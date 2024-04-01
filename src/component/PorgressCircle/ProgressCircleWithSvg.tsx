import { GroupSvg } from '@Asset/logo';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const ProgressCircleWithSVG = ({ progress,svg }) => {
  // Calculate the circumference of the circle
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={styles.container}>
      <Svg width={200} height={200}>
     
        <Circle
          cx={100}
          cy={100}
          r={radius}
          fill="none"
          stroke="#007bff"
          strokeWidth={5}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
      {/* Text in the middle */}
      {/* <Text style={styles.text}>{`${Math.round(progress * 100)}%`}</Text> */}
      {/* Your SVG in the middle */}
      <View style={styles.svgContainer}>
        {/* Add your SVG elements here */}
        <Svg width={50} height={50}>
            {svg}
          {/* Add more SVG elements here */}
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width:'60%',
    alignSelf:'flex-start'
  },
  text: {
    position: 'absolute',
    top: 90,
    left: 90,
    // color: '#007bff',
    fontSize: 24,
  },
  svgContainer: {
    position: 'absolute',
    top: 90,
    left: 45,
  },
});

export default ProgressCircleWithSVG;
