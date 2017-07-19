import React, { Component } from "react";
import {
  View,
  ScrollView,
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
import {
  Table,
  TableWraper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";

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

  const tableHead = ["Host", "Days", "Time"];
  const tableData = [
    [
      custom_fields.radio_show_host,
      days,
      `${custom_fields.radio_show_recurring_from} - ${custom_fields.radio_show_recurring_to}`
    ]
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
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

        <Table borderStyle={lStyle.borderStyle}>
          <Row
            data={tableHead}
            style={lStyle.head}
            textStyle={lStyle.heading}
          />
          <Rows data={tableData} style={lStyle.row} textStyle={lStyle.text} />
        </Table>

        <View style={lStyle.subtitleWrap}>
          <Separator />
          {/*<ListItemFull text={`Hosts: ${custom_fields.radio_show_host}`} />
          <ListItemFull
            text={`Aired On: ${days} | Time: ${custom_fields.radio_show_recurring_from} - ${custom_fields.radio_show_recurring_to} `}
          />
          <Separator />*/}
        </View>
        <Separator />
        <HTMLView value={`<h5>Bio:</h5>`} stylesheet={lStyle} />
        <HTMLView value={content} stylesheet={lStyle} />
      </View>
    </ScrollView>
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
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
    paddingHorizontal: 5
  },
  text: {
    marginLeft: 5
  },
  row: {
    height: 60,
    paddingHorizontal: 5
  },
  heading: {
    fontWeight: "600",
    fontSize: 18,
    color: "#111"
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: "#ccc"
  }
});

export default SingleShow;
