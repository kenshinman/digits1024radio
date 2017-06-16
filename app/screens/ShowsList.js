import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  FlatList,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Container } from "../components/Container";
import { ListItemFull, Separator } from "../components/List";
//import Listitem from "react-native-listitem";

import styles from "./styles";

const iconPref = Platform.OS === "ios" ? "ios" : "md";

class ShowsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioShows: [],
      loading: true
    };
  }

  componentWillMount() {
    this.getRadioShows();
  }

  getRadioShows() {
    fetch("http://digitsound.com.ng/?json=1&post_type=radio-show")
      .then(response => response.json())
      .then(data => this.setState({ radioShows: data.posts, loading: false }))
      .catch(() => console.log("There was an error"));
  }

  // handlePress = item => {
  //   this.props.navigation.navigate("SingleShow", { title: item.title });
  // };

  render() {
    const shows = this.state.radioShows.filter(
      show => show.thumbnail_images.thumbnail
    );

    return (
      <View style={{ flex: 1 }}>
        {this.state.loading
          ? <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator size="large" />
            </View>
          : <FlatList
              data={shows}
              renderItem={({ item }) =>
                <ListItemFull
                  thumbnail
                  img={
                    item.thumbnail_images !== null ||
                      item.thumbnail_images !== undefined ||
                      item.thumbnail_images.length > 0
                      ? item.thumbnail_images.thumbnail.url
                      : "http://loremflickr.com/60/60/cat"
                  }
                  leftIconName="ios-arrow-forward"
                  text={item.title}
                  onPress={() =>
                    this.props.navigation.navigate("SingleShow", {
                      item: item
                    })}
                  icon={true}
                  note={item.custom_fields.radio_show_host}
                />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />}
      </View>
    );
  }
}
export default ShowsList;
