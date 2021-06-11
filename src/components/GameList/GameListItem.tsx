import * as React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { theme } from "../../common/theme"
import { Pressable } from "../Pressable"

interface GameListItemProps {
    item: Game
}

export const GameListItem = ({ item }: GameListItemProps) => {
    return (
        <Pressable style={styles.container}>
            <Image
                source={{
                    uri: item.thumbnail,
                }}
                style={styles.image}
                resizeMode="cover"
                borderTopLeftRadius={4}
                borderBottomLeftRadius={4}
            />
            <View style={styles.textContainer}>
                <Text style={theme.typography.h1} adjustsFontSizeToFit numberOfLines={1}>
                    {item.title}
                </Text>
                <Text
                    style={theme.typography.subtitle}
                    adjustsFontSizeToFit
                    numberOfLines={2}
                >
                    {item.platform}
                </Text>
                <Text
                    style={[theme.typography.subtitle, { color: theme.colors.primary }]}
                    adjustsFontSizeToFit
                    numberOfLines={2}
                >
                    {item.genre}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.card,
        borderRadius: theme.roundness,
        flexDirection: "row",
        height: 85,
        maxWidth: 400,
    },
    image: {
        flex: 1,
    },
    textContainer: {
        padding: 8,
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: theme.colors.text.primary,
    },
    subtitle: {
        fontSize: 16,
        color: theme.colors.text.secondary,
    },
})
