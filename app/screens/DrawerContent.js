import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
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
  },
  logoDrawer: {
    width: 100,
    height: 100
  }
});

const DrawerContent = props =>
  <View style={styles.container}>
    <View style={styles.topBox}>
      <Image
        style={styles.logoDrawer}
        source={require("../assets/images/logo.png")}
      />
      <Text style={styles.boxTitle}>Digits 1024 Radio</Text>
    </View>
    <DrawerItems {...props} />
  </View>;

export default DrawerContent;
