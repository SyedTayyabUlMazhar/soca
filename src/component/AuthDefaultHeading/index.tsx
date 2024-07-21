import H1 from "@Component/Headings/H1";
import H7 from "@Component/Headings/H7";
import Metrics from "@Utility/Metrics";
import React from "react";
import { View } from "react-native";
import styles from "./style";
import { Colors } from "@Theme/Colors";

interface IAuthDefaultHeading {
  title?: string;
  desc?: string;
  isOtp?: boolean;
}

const AuthDefaultHeading = ({
  title,
  desc,
  isOtp = false,
}: IAuthDefaultHeading) => {
  return (
    <View style={styles.root}>
      <H1 style={styles.textCenter} text={title} />
      {desc && (
        <H7
          style={[styles.desc, isOtp ? { fontSize:14,color:Colors.WHITE_THREE } : null]}
          text={desc}
        />
      )}
    </View>
  );
};

export default AuthDefaultHeading;
