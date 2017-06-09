import React from "react";
import { ScrollView, Text, Platform, View } from "react-native";
import { DrawerNavigator, StackNavigator, DrawerItems } from "react-navigation";
import Home from "../screens/Home";
import ShowsList from "../screens/ShowsList";
import DrawerContent from "../screens/DrawerContent";
import Icon from "react-native-vector-icons/Ionicons";
import { ButtonIcon } from "../components/Icons";

const iconPref = Platform.OS === "ios" ? "ios" : "md";

import styles from "./styles";

const Stack = {
  Home: {
    screen: Home
  },
  ShowsList: {
    screen: ShowsList
  }
};

const DrawerRoutes = {
  FirstViewStack: {
    name: "FirstViewStack",
    screen: StackNavigator(Stack, {
      initialRouteName: "Home",
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Home",
        drawerIcon: <Icon size={32} name={`${iconPref}-home`} />,
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
        headerTitle: "Radio Shows",
        drawerIcon: <Icon size={32} name={`${iconPref}-list-box`} />,
        headerLeft: (
          <View style={styles.icon}>
            <ButtonIcon
              color={styles.$iconRed}
              size={30}
              name={`${iconPref}-arrow-back`}
              onPress={() => navigation.goBack(null)}
            />
          </View>
        )
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
          <ScrollView><DrawerContent {...props} /></ScrollView>
      })
    },
    ...Stack
  },
  {
    headerMode: "none"
  }
);

export default RootNavigator;
