import { RouteProp } from "@react-navigation/native"
import * as React from "react"
import { View, Text, StyleSheet, Image, Linking, SafeAreaView } from "react-native"
import { theme } from "../../common/theme"
import { Header } from "../../components/Header"

interface GameDetails {
    /** Passed using React Navigation */
    route: RouteProp<any, "Signin">
}

/** Displays details about a specific game */
export const GameDetails = ({ route }: GameDetails) => {
    const game: Game = route!.params!.game

    const item = (label: string, info: string) => (
        <View style={styles.row}>
            <View style={styles.leftItem}>
                <Text style={theme.typography.subtitle}>{label}: </Text>
            </View>
            <View style={styles.rightItem}>
                <Text style={theme.typography.body}>{info}</Text>
            </View>
        </View>
    )

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header backBtnEnabled title={game.title} />

                <View style={styles.card}>
                    <Image
                        source={{ uri: game.thumbnail }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.textContainer}>
                        <Text style={theme.typography.body}>
                            {game.short_description}
                        </Text>
                        <Text></Text>
                        {item("Genre", game.genre)}
                        {item("Release Date", game.release_date)}
                        {item("Platform", game.platform)}
                        {item("Developer", game.developer)}
                        {item("Publisher", game.publisher)}

                        <View style={styles.row}>
                            <View style={styles.leftItem}>
                                <Text style={theme.typography.subtitle}>Website: </Text>
                            </View>
                            <View style={styles.rightItem}>
                                <Text
                                    style={[
                                        theme.typography.body,
                                        { color: "dodgerblue" },
                                    ]}
                                    onPress={() => Linking.openURL(game.game_url)}
                                >
                                    {game.game_url}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    card: {
        flex: 1,
        backgroundColor: theme.colors.card,
        borderRadius: theme.roundness,
        margin: theme.spacing.primary,
    },
    textContainer: {
        marginTop: 8,
        flex: 1,
        padding: theme.spacing.primary,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    leftItem: {
        flex: 1.2,
    },
    rightItem: {
        marginLeft: 4,
        flex: 2,
    },
    label: {
        ...theme.typography.subtitle,
    },
    info: {
        ...theme.typography.body,
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 2,
        borderTopRightRadius: theme.roundness,
        borderTopLeftRadius: theme.roundness,
    },
})
