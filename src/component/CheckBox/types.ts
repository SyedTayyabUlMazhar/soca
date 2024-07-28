import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type CheckBoxProps = {
  label?: string;
  isChecked: boolean;
  onCheckedChange: (isChecked: boolean) => void;
  size?: number;
  color?: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  isDisabled?:boolean
};
