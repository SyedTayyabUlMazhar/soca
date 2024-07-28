import Spacer from "@Component/Spacer";
import { Colors } from "@Theme/Colors";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { RadioButtonProps } from "./types";

const RadioButton = (props: RadioButtonProps) => {
  const {
    label,
    isChecked,
    onPress,
    color = Colors.DARK_BLACK,
    size = 22,
    textStyle,
    style,
    LabelLeft,
  } = props;

  const properties = useRef({
    scaleAnim: new Animated.Value(isChecked ? 1 : 0),
    opacityAnim: new Animated.Value(isChecked ? 1 : 0),
  }).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(properties.scaleAnim, {
        toValue: isChecked ? 1 : 0,
        useNativeDriver: true,
        bounciness: 11,
        restDisplacementThreshold: 0.8,
      }),
      Animated.spring(properties.opacityAnim, {
        toValue: isChecked ? 1 : 0,
        useNativeDriver: true,
        bounciness: 18,
      }),
    ]).start();
  }, [isChecked]);

  const renderLabel = () => {
    if (!label) return null;

    return (
      <>
        <Spacer horizontal={8} />
         {LabelLeft}
        <Text style={[{ flex: 1 }, textStyle]}>{label}</Text>
      </>
    );
  };

  const renderRadioButton = () => {
    return (
      <View
        style={[
          styles.radioButtonUnchecked,
          { width: size, height: size },
          { borderColor: isChecked ? color : Colors.PLACEHOLDER_COLOR },
        ]}
      >
        <Animated.View
          style={[
            styles.radioButtonInnerCircle,
            {
              opacity: properties.opacityAnim,
              transform: [{ scale: properties.scaleAnim }],
              backgroundColor: color,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {renderRadioButton()}
      {renderLabel()}
    </Pressable>
  );
};

export default RadioButton;
