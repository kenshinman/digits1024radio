import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { DrawerItems } from "react-navigation";
import { ListItem, Separator } from "../components/List";
import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  topBox: {
    height: 200,
    width: "100%",
    backgroundColor: "$primaryRed",
    justifyContent: "center",
    alignItems: "center"
  },
  boxTitle: {
    fontSize: 24,
    color: "$white"
  }
});

const DrawerContent = props =>
  <View style={styles.container}>
    <View style={styles.topBox}>
      <Text style={styles.boxTitle}>Digits 1024 Radio</Text>
    </View>
    <DrawerItems {...props} />
  </View>;

export default DrawerContent;
