import SearchBox from "@Component/SearchBox";
import Spacer from "@Component/Spacer";
import React, { useEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import Item from "./Item";
import { FilterOptionsModalProps, OptionItemType } from "./types";
import styles from "./styles";

const Config = {
  modal: {
    animationInTiming: 50,
    animationOutTiming: 200,
    animationIn: "fadeIn",
    animationOut: "fadeOut",
    swipeDirection: undefined,
    style: undefined,
    containerStyle: styles.modalContainer,
  },
  sheet: {
    animationInTiming: 400,
    animationOutTiming: 700,
    animationIn: "slideInUp",
    animationOut: "slideOutDown",
    swipeDirection: "down",
    style: styles.sheet,
    containerStyle: styles.sheetContainer,
  },
} as const;

const FilterOptionsModal = (props: FilterOptionsModalProps) => {
  const {
    setIsVisible,
    isVisible,
    data,
    onItemPress,
    selectedItem,
    mode,
    multiple,
    searchable,
  } = props;
  const [search, setSearch] = useState("");
  
  const [filteredData, setFilteredData] = useState(data);

  const isSheet = mode === "sheet";
  const { containerStyle, ...config } = Config[mode];

  const close = () => {
    setIsVisible(false);
    setSearch("");
  };
  useEffect(() => {
    setFilteredData(
      data?.filter((item) =>
        item?.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const _onItemPress = (item: OptionItemType) => {
    if (!multiple) {
      onItemPress(item);
      close();
    } else {
      const copy = selectedItem ? [...selectedItem] : []; // Initialize as empty array if selectedItem is null or undefined
      const index = copy.findIndex((value) => value.id == item.id);
      if (index > -1) {
        copy.splice(index, 1);
      } else {
        copy.push(item);
      }
      onItemPress(copy);
    }
  };

  const renderItem = (item: OptionItemType, index: number) => {
    const isActive = Array.isArray(selectedItem)
      ? selectedItem.some((value) => value.id == item.id)
      : selectedItem?.id == item.id;

    return (
      <>
        <Item
          key={item.id}
          text={item.name}
          onPress={() => _onItemPress(item)}
          isActive={isActive}
          multiple={multiple}
        />
        <Spacer vertical={index === data.length - 1 ? 0 : 24} scaleVertical />
      </>
    );
  };
  return (
    <ReactNativeModal
      backdropOpacity={0.4}
      onBackdropPress={close}
      isVisible={isVisible}
      backdropTransitionOutTiming={0}
      swipeThreshold={100}
      onSwipeComplete={() => setIsVisible(false)}
      propagateSwipe={true}
      {...config}
    >
      <KeyboardAvoidingView behavior="padding">
        <View style={containerStyle}>
          {isSheet ? <View style={styles.handleIndicator} /> : null}
          {searchable ? (
            <SearchBox wrapperStyle={{ marginBottom: 16 }} cb={setSearch} />
          ) : null}
      
          <FlatList
            data={filteredData}
            renderItem={({ item, index }) => renderItem(item, index)}
          />
        </View>
      </KeyboardAvoidingView>
    </ReactNativeModal>
  );
};

export default FilterOptionsModal;
