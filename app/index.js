import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, NetInfo } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import ShowsList from "./screens/ShowsList";
import RootNavigator from "./config/routes";
import {
  ReactNativeAudioStreaming,
  Player
} from "react-native-audio-streaming";

import OneSignal from "react-native-onesignal";

EStyleSheet.build({
  $primaryRed: "#F40301",
  $primaryBlue: "#0011c9",
  $bgGrey: "#F5FCFF",
  $border: "#7e7e7e",
  $darkText: "#222222",
  $white: "#fff"
});

const url = "http://epsilon.shoutca.st:9139/;";
ReactNativeAudioStreaming.pause();
ReactNativeAudioStreaming.resume();
ReactNativeAudioStreaming.play(url, {
  showIniOSMediaCenter: true,
  showInAndroidNotifications: true
});
ReactNativeAudioStreaming.stop();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioShows: [],
      loading: true
    };
  }

  componentDidMount() {
    //this.getRadioShows();
    OneSignal.configure({});
  }

  // getRadioShows() {
  //   fetch("http://localhost/digits/?json=1&post_type=radio-show")
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(() => alert("no network"));
  // }

  render() {
    return <RootNavigator />;
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$bgGrey"
  }
});
