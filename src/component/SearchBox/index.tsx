import { PlayerSearch, Search } from "@Asset/logo";
import { Colors } from "@Theme/index";
import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./style";

interface ISearchBox {
  cb?: any;
  wrapperStyle?: any;
  title?: string;
}

const SearchBox = ({ cb, wrapperStyle, title = "Search Player" }: ISearchBox) => {
  const [searchText, setSearchText] = useState("");

  let timeoutId: number;

  useEffect(() => {
    const logSearchText = () => {
      cb && cb(searchText);
    };
    // Set a new timeout to log when typing stops
    timeoutId = setTimeout(logSearchText, 500);

    // Cleanup function to clear the timeout when component unmounts or searchText changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <View style={[styles.container, wrapperStyle]}>
      <TextInput
        style={styles.input}
        placeholder={title}
        placeholderTextColor={Colors.Colors.GREY}
        value={searchText}
        onChangeText={handleSearch}
      />
      <Search/>

    </View>
  );
};

export default SearchBox;
