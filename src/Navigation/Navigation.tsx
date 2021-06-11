import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { GameDetails } from "../screens/GameDetails"
import { Home } from "../screens/Home"

const Stack = createStackNavigator()

/** Allows navigation between screens */
export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GameDetails" component={GameDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
