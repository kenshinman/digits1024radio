import React, { Component } from "react";
import { View, Text, NetInfo, Platform, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Container } from "../components/Container";
import Icon from "react-native-vector-icons/Ionicons";

const styles = EStyleSheet.create({
  offlineText: {
    color: "#9f9f9f",
    textAlign: "center",
    fontWeight: "400"
  }
});

const prefOs = Platform.OS === "ios" ? "ios" : "md";

class Offline extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Icon name={`${prefOs}-alert`} color="#9f9f9f" size={64} />
        <Text style={styles.offlineText}>
          You are Offline, please turn on {"\n"} your data connection
        </Text>
        <TouchableOpacity onPress={this.props.reload}>
          <Icon name={`${prefOs}-refresh`} color="#9f9f9f" size={42} />
        </TouchableOpacity>
      </Container>
    );
  }
}

export default Offline;
