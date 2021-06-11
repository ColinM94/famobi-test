import { useNavigation } from "@react-navigation/native"
import * as React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { theme } from "../../common/theme"
import { Pressable } from "../../components/Pressable"

interface HomeGameListItemProps {
    item: Game
}

export const HomeGameListItem = ({ item }: HomeGameListItemProps) => {
    const navigation = useNavigation()

    return (
        <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("GameDetails", { game: item })}
        >
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
                <Text style={theme.typography.h2} numberOfLines={1}>
                    {item.title}
                </Text>
                <Text
                    style={theme.typography.subtitle}
                    adjustsFontSizeToFit
                    numberOfLines={1}
                >
                    {item.platform}
                </Text>
                <Text
                    style={[theme.typography.subtitle, { color: theme.colors.primary }]}
                    adjustsFontSizeToFit
                    numberOfLines={1}
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
        height: 90,
        maxWidth: 400,
    },
    image: {
        flex: 1,
    },
    textContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
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
