import React from "react";
import { ScrollView, Text, Platform, View } from "react-native";
import { DrawerNavigator, StackNavigator, DrawerItems } from "react-navigation";
import Home from "../screens/Home";
import ShowsList from "../screens/ShowsList";
import DrawerContent from "../screens/DrawerContent";
import SingleShow from "../screens/SingleShow";
import Icon from "react-native-vector-icons/Ionicons";
import { ButtonIcon } from "../components/Icons";

const iconPref = Platform.OS === "ios" ? "ios" : "md";

import styles from "./styles";

const ShowsStack = StackNavigator({
  ShowsList: {
    screen: ShowsList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Radio Shows",
      headerLeft: (
        <View style={styles.icon}>
          <ButtonIcon
            color={styles.$iconRed}
            size={30}
            name={`${iconPref}-menu`}
            onPress={() => navigation.navigate("DrawerOpen")}
          />
        </View>
      )
    })
  },
  SingleShow: {
    screen: SingleShow,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.item.title
    })
  }
});

const Stack = {
  Home: {
    screen: Home
  },
  ShowsList: {
    screen: ShowsStack
  }
};

const DrawerRoutes = {
  FirstViewStack: {
    name: "FirstViewStack",
    screen: StackNavigator(Stack, {
      initialRouteName: "Home",
      initialRouteParams: ({ navigation }) => {
        return navigation.state;
      },
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Home",
        drawerIcon: <Icon size={26} name={`${iconPref}-home`} />,
        headerTitle: "Digits 1024",
        headerLeft: (
          <View style={styles.icon}>
            <ButtonIcon
              color={styles.$iconRed}
              size={30}
              name={`${iconPref}-menu`}
              onPress={() => navigation.navigate("DrawerOpen")}
            />
          </View>
        )
      })
    })
  },
  SecondViewStack: {
    name: "SecondViewStack",
    screen: StackNavigator(Stack, {
      initialRouteName: "ShowsList",
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Radio Shows",
        header: () => null,
        drawerIcon: <Icon size={26} name={`${iconPref}-list-box`} />
      })
    })
  }
};

const RootNavigator = StackNavigator(
  {
    Drawer: {
      name: "Drawer",
      screen: DrawerNavigator(DrawerRoutes, {
        drawerWidth: 300,
        contentComponent: props =>
          <ScrollView>
            <DrawerContent {...props} />
          </ScrollView>
      })
    },
    ...Stack
  },
  {
    headerMode: "none"
  }
);

export default RootNavigator;
