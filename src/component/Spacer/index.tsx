import Metrics from "@Utility/Metrics";
import React from "react";
import { View } from "react-native";

export type SpacerProps = {
  vertical?: number;
  horizontal?: number;
  scaleVertical?: boolean;
  scaleHorizontal?: boolean;
};

const Spacer: React.FC<SpacerProps> = (props) => {
  const {
    vertical = 0,
    horizontal = 0,
    scaleVertical = true,
    scaleHorizontal = true,
  } = props;
  const height = scaleVertical ? Metrics.verticalScale(vertical) : vertical;
  const width = scaleHorizontal ? Metrics.scale(horizontal) : horizontal;

  return <View style={{ width, height }}></View>;
};

export default Spacer;
