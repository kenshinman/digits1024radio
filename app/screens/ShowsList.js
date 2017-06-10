import React, { Component } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Container } from "../components/Container";

import styles from "./styles";

const iconPref = Platform.OS === "ios" ? "ios" : "md";

class ShowsList extends Component {
  // static navigationOptions = {
  //   drawerLabel: "Radio Shows",
  //   headerTitle: "Radio Shows",
  //   drawerIcon: () => <Icon size={32} name={`${iconPref}-list-box`} />
  // };

  render() {
    return (
      <Container>
        <Text style={styles.noShows}>
          No Radio shows listed yet. {"\n"} Check Later
        </Text>
      </Container>
    );
  }
}
export default ShowsList;
