import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  FlatList,
  Image
} from "react-native";
//import HTML from "react-native-fence-html";
import EStyleSheet from "react-native-extended-stylesheet";

import styles from "./styles";

const SingleShow = props => {
  const { item } = props.navigation.state.params;
  const { title, thumbnail_images, content, excerpt, url, date, author } = item;
  return (
    <View style={{ flex: 1 }}>
      <Image
        resizeMode="cover"
        style={styles.singleShowBanner}
        source={{ uri: thumbnail_images.medium.url }}
      />
      <View style={lStyle.contentWrap}>
        <Text style={lStyle.title}>{title}</Text>

      </View>
    </View>
  );
};

const lStyle = EStyleSheet.create({
  contentWrap: {
    marginHorizontal: 10
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#333"
  }
});

export default SingleShow;
