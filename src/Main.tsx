import { StatusBar } from "expo-status-bar"
import React from "react"
import { View, StyleSheet, LogBox } from "react-native"
import { theme } from "./common/theme"
import { Navigation } from "./Navigation"

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
