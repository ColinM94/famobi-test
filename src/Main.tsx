import { StatusBar } from "expo-status-bar"
import React from "react"
import { View, StyleSheet, LogBox } from "react-native"
import { theme } from "./common/theme"
import { Navigation } from "./Navigation"

/**  Core of application. Sets global background color, configures status bar and loads Navigation ( Navigation then loads Home.tsx). */
export const Main = () => {
    LogBox.ignoreLogs(["Invalid child context"])

    return (
        <View style={styles.container}>
            <StatusBar style="light" translucent={false} />
            <Navigation />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    statusBar: {},
})
