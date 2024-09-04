import H2 from '@Component/Headings/H2';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { DATE_FORMATS } from '../../utility/DateUtils';
import Metrics from '../../utility/Metrics';
import ButtonView from '../ButtonView';
const MinAge = new Date();
const MaxAge = new Date();
const MaxSearchDate = new Date();
MaxSearchDate.setFullYear(MaxSearchDate.getFullYear() + 100);
MinAge.setFullYear(MinAge.getFullYear() - 0);
MaxAge.setFullYear(MaxAge.getFullYear() - 100);
const FormDataInput = React.forwardRef((props: any, ref) => {
  const { isDisabled } = props
  let format =
    props.mode == 'date' ? DATE_FORMATS.NORMAL_FORMAT : DATE_FORMATS.TIME_24;

  const [state, setState] = React.useState({
    isErr: false,
    err: '',
    value: props.value || '',
  });

  React.useEffect(
    () =>
      setState(s => ({
        ...s,
        value: props.value,
        isErr: false,
        err: '',
      })),
    [props.value],
  );

  React.useImperativeHandle(ref, () => ({
    setError: (isErr: boolean, err: string) => {
      setState(s => ({
        ...s,
        isErr,
        err: err?.length ? err : props.err,
      }));
    },
    getValue: () => state.value,
  }));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    hideDatePicker();

    if (props.isDob) {
      setState(s => ({
        ...s,
        value: moment(date).toString(),
        err: null,
        isErr: false,
      }));
    } else {
      setState(s => ({
        ...s,
        value: moment(date).toISOString(),
        err: null,
        isErr: false,
      }));
    }
  };
console.log(state.value,'state.valuestate.valuestate.value');

  return (
    <View style={[styles.mainContainer, { width: props.width }]}>
      {props.label && <Text style={[styles.labelStyle]}>{props.label}</Text>}
      <ButtonView
        enableClick={isDisabled}
        style={[styles.datePickerInput, props.wrapperStyle, isDisabled
          ? {
            backgroundColor: Colors.Colors.DISABLED_INPUT_BG,
            color: 'rgba(0, 0, 0, 0.5)',
          }
          : null,]}
        onPress={showDatePicker}
      >
        <Text
          style={
            [props.value && !isDisabled
              ? {
                ...Fonts.Medium(Fonts.Size.small, Colors.Colors.DARK_BLACK),
                textAlign: 'left',
              }
              : {
                ...Fonts.Medium(Fonts.Size.small, Colors.Colors.WHITE),
                textAlign: 'left',
              }]
          }>
          {state.value
            ? moment(state.value).format(format)
            : props?.placeholder
              ? props?.placeholder
              : format}
        </Text>
      </ButtonView>

      {props.isDob ? (
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={props.mode}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={props.isDob && MinAge}
          minimumDate={props.isDob && MaxAge}
          date={
            state.value && props.isDob
              ? moment(state.value).toDate()
              :  new Date(MinAge)
          }
        />
      ) : (
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={props.mode}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={new Date()}
          minimumDate={new Date()}
        />
      )}

      {!!state.isErr && <H2 style={styles.errorMessage} text={state.err} />}
    </View>
  );
});

export default FormDataInput;
const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: Metrics.verticalScale(10),
  },
  labelStyle: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.DARK_BLUE),
    marginBottom: Metrics.verticalScale(10),
  },
  errorMessage: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.TOMATO),
    marginTop: Metrics.scale(5),
  },
  container: {
    marginBottom: Metrics.verticalScale(15),
  },
  datePickerInput: {
    borderWidth: 1,
    borderColor: Colors.Colors.DARK_BLUE,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.scale(12),
    position: 'relative',
    width: '100%',
    borderRadius: 10,
  },
  imageAngleIcon: {
    position: 'absolute',
    right: 20,
    top: 22,
    zIndex: 99999,
  },
});
