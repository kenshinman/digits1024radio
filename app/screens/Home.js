import React, { Component } from "react";
import { View, Text, TouchableOpacity, Platform, Image } from "react-native";
import { Container } from "../components/Container";
import Icon from "react-native-vector-icons/Ionicons";
import { ButtonIcon } from "../components/Icons";
import {
  ReactNativeAudioStreaming,
  Player
} from "react-native-audio-streaming";

import styles from "./styles";

const iconPref = Platform.OS === "ios" ? "ios" : "md";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true
    };
  }

  playRadio = () => {
    this.setState({ playing: !this.state.playing });
  };

  renderRadio() {
    if (!this.state.playing) {
      ReactNativeAudioStreaming.pause();
      return <Text>Play Now</Text>;
    } else {
      const url = "http://epsilon.shoutca.st:9139/;";
      ReactNativeAudioStreaming.play(url, {
        showIniOSMediaCenter: true,
        showInAndroidNotifications: true
      });
      ReactNativeAudioStreaming.resume();
      return <Player url="http://epsilon.shoutca.st:9139/;" />;
    }
  }

  render() {
    return (
      <Container>
        <Image
          resizeMode="cover"
          style={styles.bg}
          source={require("../assets/images/bg_1.jpg")}
        >
          <Image
            style={styles.logoCenter}
            source={require("../assets/images/logo.png")}
          />
          <TouchableOpacity style={styles.playButton} onPress={this.playRadio}>
            <Text style={styles.playText}>Play</Text>
          </TouchableOpacity>

          {/*{this.state.playing
            ? <Player url={"http://epsilon.shoutca.st:9139/;"} />
            : <Text>Play</Text>}*/}
          {/*{this.renderRadio()}*/}
          <Player url="http://epsilon.shoutca.st:9139/;" />
        </Image>
      </Container>
    );
  }
}

export default Home;
