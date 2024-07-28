import React from "react";
import styles from "./styles";
import ButtonView from "@Component/ButtonView";
import RadioButton from "@Component/RadioButton";
import Metrics from "@Utility/Metrics";
import CheckBox from "@Component/CheckBox";

export type ItemProps = {
  text: string;
  isActive: boolean;
  onPress: () => void;
  multiple?: boolean;
};
const Item: React.FC<ItemProps> = (props) => {
  const { text, isActive, onPress, multiple } = props;
  return (
    <ButtonView
      onPress={onPress}
      style={[
        styles.outline,
        isActive ? styles.outlineActive : styles.outlineInActive,
      ]}
    >
      {multiple ? (
        <CheckBox
          label={text}
          isChecked={isActive}
          onCheckedChange={onPress}
          size={Metrics.scale(22)}
          textStyle={[
            styles.text,
            isActive ? styles.textActive : styles.textInActive,
          ]}
        />
      ) : (
        <RadioButton
          label={text}
          isChecked={isActive}
          onPress={onPress}
          size={Metrics.scale(22)}
          textStyle={[
            styles.text,
            isActive ? styles.textActive : styles.textInActive,
          ]}
        />
      )}
    </ButtonView>
  );
};

export default Item;
