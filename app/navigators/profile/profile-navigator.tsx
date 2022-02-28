import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

export type ProfileNavigatorParamList = {
  Orders: undefined;
  MyDetails: undefined;
  DeliveryAddress: undefined;
  PaymentMethods: undefined;
  PromoCards: undefined;
  Notifications: undefined;
  Help: undefined;
  About: undefined;
}

const Stack = createStackNavigator<ProfileNavigatorParamList>()
export const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      
    </Stack.Navigator>
  )
}
