import React, { Component } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const iconPref = Platform.OS === "ios" ? "ios" : "md";

class ShowsList extends Component {
  // static navigationOptions = {
  //   drawerLabel: "Radio Shows",
  //   headerTitle: "Radio Shows",
  //   drawerIcon: () => <Icon size={32} name={`${iconPref}-list-box`} />
  // };

  render() {
    return (
      <View>
        <Text>List Screen</Text>
      </View>
    );
  }
}
export default ShowsList;
