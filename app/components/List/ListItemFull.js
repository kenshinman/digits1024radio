import React, { PropTypes } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

const ListItemFull = ({
  text,
  onPress,
  thumbnail,
  leftIconName,
  icon,
  img,
  note
}) =>
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      {thumbnail
        ? <Image
            style={styles.thumbnail}
            source={{ uri: img }}
            resizeMode="cover"
          />
        : null}
      <View style={styles.textArea}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.note}>Host: {note}</Text>
      </View>
      {icon ? <Icon name={leftIconName} size={24} color="#ccc" /> : null}
    </View>
  </TouchableHighlight>;

ListItemFull.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  leftIconName: PropTypes.string,
  note: PropTypes.any,
  onPress: PropTypes.func,
  thumbnail: PropTypes.bool,
  icon: PropTypes.bool
};

export default ListItemFull;
