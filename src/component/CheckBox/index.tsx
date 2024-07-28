import { CheckIconBlue } from "@Asset/logo";
import Spacer from "@Component/Spacer";
import { Colors } from "@Theme/Colors";
import Metrics from "@Utility/Metrics";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { CheckBoxProps } from "./types";

const CheckBox = (props: CheckBoxProps) => {
  const {
    label,
    isChecked,
    onCheckedChange,
    color = Colors.DARK_BLACK,
    size = 20,
    isDisabled,
    textStyle,
    style,
  } = props;

  const properties = useRef({
    scaleAnim: new Animated.Value(isChecked ? 1 : 0),
    opacityAnim: new Animated.Value(isChecked ? 1 : 0),
  }).current;

  const toggle = () => {
    if (isDisabled) return;
    onCheckedChange(!isChecked);
  };
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
        <Text style={[{ flex: 1 }, textStyle]}>{label}</Text>
      </>
    );
  };

  const renderCheckbox = () => {
    return (
      <View style={[styles.checkboxUnchecked, { width: size, height: size }]}>
        <Animated.View
          style={[
            styles.checkboxCheckedIconContainer,
            {
              opacity: properties.opacityAnim,
              transform: [{ scale: properties.scaleAnim }],
              backgroundColor: color,
              width: size,
              height: size,
            },
            isDisabled && { backgroundColor: Colors.DISABLED_BTN_BG },
          ]}
        >
          <CheckIconBlue size={Metrics.scale(size - 8)} color={Colors.WHITE} />
        </Animated.View>
      </View>
    );
  };

  return (
    <Pressable style={[styles.container, style]} onPress={toggle}>
      {renderCheckbox()}
      {renderLabel()}
    </Pressable>
  );
};

export default CheckBox;
