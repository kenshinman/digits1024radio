import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import HTMLView from "react-native-htmlview";
import ResponsiveImage from "react-native-responsive-image";
import EStyleSheet from "react-native-extended-stylesheet";
import { ListItemFull, Separator } from "../components/List";
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from "react-native-card-view";
import styles from "./styles";

const { width, height } = Dimensions.get("window");

const SingleShow = props => {
  const { item } = props.navigation.state.params;
  const {
    title,
    thumbnail_images,
    content,
    excerpt,
    url,
    date,
    custom_fields
  } = item;

  const days = custom_fields.radio_show_recurring_days.map((d, i) => {
    return (" " + d).toUpperCase();
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ResponsiveImage
        initWidth={width}
        initHeight={width}
        style={styles.singleShowBanner}
        source={{ uri: thumbnail_images.medium.url }}
        resizeMode="cover"
      />
      <View style={lStyle.contentWrap}>
        <HTMLView value={`<h3>${title}</h3>`} stylesheet={lStyle} />
        <HTMLView value={`<h5>Details:</h5>`} stylesheet={lStyle} />

        <View style={lStyle.subtitleWrap}>
          <Separator />
          <ListItemFull text={`Hosts: ${custom_fields.radio_show_host}`} />
          <ListItemFull
            text={`Aired On: ${days} | Time: ${custom_fields.radio_show_recurring_from} - ${custom_fields.radio_show_recurring_to} `}
          />
          <Separator />
        </View>
        <HTMLView value={`<h5>Description:</h5>`} stylesheet={lStyle} />
        <HTMLView value={content} stylesheet={lStyle} />
      </View>
    </View>
  );
};

const lStyle = EStyleSheet.create({
  contentWrap: {
    marginHorizontal: 10,
    marginVertical: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "200",
    color: "#333"
  },
  h3: {
    color: "#222",
    fontSize: 22,
    fontWeight: "300"
  },
  h5: {
    fontSize: 18
  },
  i: {
    fontStyle: "italic"
  },
  strong: {
    fontWeight: "bold"
  }
});

export default SingleShow;
