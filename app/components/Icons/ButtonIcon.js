import React, { PropTypes } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ButtonIcon = ({ name, size = 30, color = "#222", onPress = null }) =>
  <TouchableOpacity onPress={() => alert("yay")}>
    <Icon name={name} size={size} color={color} onPress={onPress} />
  </TouchableOpacity>;

ButtonIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func
};
export default ButtonIcon;
