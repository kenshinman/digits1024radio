import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Platform
} from "react-native";
import { DrawerItems } from "react-navigation";
import { ListItemFull, Separator } from "../components/List";
import EStyleSheet from "react-native-extended-stylesheet";
import Icon from "react-native-vector-icons/FontAwesome";

const prefOs = Platform.OS === "ios" ? "ios" : "md";

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
  },
  footer: {
    height: 60,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 5
  },
  iconWrap: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 21,
    marginHorizontal: 10
  },
  socitlTitleWrap: {
    marginHorizontal: 5
  },
  socialTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333"
  }
});

const DrawerContent = props =>
  <View style={styles.container}>
    <View style={{ flex: 5 }}>
      <View style={styles.topBox}>
        <Image
          style={styles.logoDrawer}
          source={require("../assets/images/logo.png")}
        />
        <Text style={styles.boxTitle}>Digits 1024 Radio</Text>
      </View>

      <DrawerItems {...props} />
    </View>
    <View
      style={{
        flex: 1,
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={styles.socialTitle}>Follow Us: </Text>
    </View>
    <View style={[styles.footer]}>

      <TouchableOpacity
        style={[styles.iconWrap, { backgroundColor: "#3b5998" }]}
        onPress={() => {
          props.navigation.navigate("DrawerClose");
          Linking.openURL("http://www.facebook.com/digits1024/");
        }}
      >
        <Icon color="#fff" name="facebook" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconWrap, { backgroundColor: "#55acee" }]}
        onPress={() => {
          props.navigation.navigate("DrawerClose");
          Linking.openURL("http://twitter.com/digits1024");
        }}
      >
        <Icon color="#fff" name="twitter" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconWrap, { backgroundColor: "#fb3958" }]}
        onPress={() => {
          props.navigation.navigate("DrawerClose");
          Linking.openURL(
            "https://www.instagram.com/digits1024/"
          );
        }}
      >
        <Icon color="#fff" name="instagram" size={24} />
      </TouchableOpacity>

    </View>
    <View>

      <ListItemFull
        style={{ backgroundColor: "#333" }}
        text="Visit Our Website"
        onPress={() => {
          props.navigation.navigate("DrawerClose");
          Linking.openURL("http://digitsound.com.ng/");
        }}
        icon
        left
        leftIconName={`${prefOs}-link`}
      />
    </View>
  </View>;

export default DrawerContent;
