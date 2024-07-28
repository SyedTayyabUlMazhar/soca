import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type RadioButtonProps = {
  label?: string;
  isChecked: boolean;
  onPress: () => void;
  size?: number;
  color?: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  LabelLeft?: React.JSX.Element
};