import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

export type ProfileNavigatorParamList = {
  orders: undefined;
  myDetails: undefined;
  deliveryAddress: undefined;
  paymentMethods: undefined;
  promoCards: undefined;
  notifications: undefined;
  help: undefined;
  about: undefined;
}

const Stack = createStackNavigator<ProfileNavigatorParamList>()
export const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
    </Stack.Navigator>
  )
}
