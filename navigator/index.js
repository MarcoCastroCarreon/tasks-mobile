import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { TopNavigation, Divider } from '@ui-kitten/components';
// import { createBottomTabNavigator } from "react-navigation-tabs";

import Login from "../views/Login";

const onBoardingNavigate = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: null,
        header: () => (
          <>
            <TopNavigation style={{ marginTop: '11%' }} />
          </>
        ),
      },
    },
  },
  {
    initialRouteName: "Login",
  }
);

// const AppNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,
//     },
//   },
//   {
//     initialRouteName: "Home",
//   }
// );

const BaseStack = createSwitchNavigator(
  {
    OnBoarding: onBoardingNavigate,
    // Root: AppNavigator,
  },
  {
    initialRouteName: "OnBoarding",
  }
);

export default createAppContainer(BaseStack);
