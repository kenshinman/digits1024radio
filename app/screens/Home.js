import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  StatusBar,
  NetInfo
} from "react-native";
import { Container } from "../components/Container";
import Icon from "react-native-vector-icons/Ionicons";
import { ButtonIcon } from "../components/Icons";
import {
  ReactNativeAudioStreaming,
  Player
} from "react-native-audio-streaming";

import Offline from "./Offline";

import styles from "./styles";

const iconPref = Platform.OS === "ios" ? "ios" : "md";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connection: true,
      live: true,
      reloadng: false
    };
  }

  componentWillMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ connection: true });
      } else {
        this.setState({ connection: false });
      }
    });

    function handleFirstConnectivityChange(isConnected) {
      //this.setState({ live: true });
      NetInfo.isConnected.removeEventListener(
        "change",
        handleFirstConnectivityChange
      );
    }
    NetInfo.isConnected.addEventListener(
      "change",
      handleFirstConnectivityChange
    );
  }

  reload() {
    this.setState({ reloadng: true });
  }

  render() {
    return (
      // <Offline reload={this.reload.bind(this)} />

      <Container>
        {this.state.connection
          ? <Container>
              <StatusBar
                backgroundColor={`${styles.$iconRed}`}
                barStyle="light-content"
              />
              <Image
                resizeMode="cover"
                style={styles.bg}
                source={require("../assets/images/bg_1.jpg")}
              >
                <Image
                  style={styles.logoCenter}
                  source={require("../assets/images/logo.png")}
                />
                <Player url="http://epsilon.shoutca.st:9139/;" />
              </Image>
            </Container>
          : <Offline reload={this.reload.bind(this)} />}
      </Container>
    );
  }
}

export default Home;
