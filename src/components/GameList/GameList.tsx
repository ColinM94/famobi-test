import * as React from "react"
import { FlatList, View, StyleSheet } from "react-native"
import { GameListItem } from "./GameListItem"
import { theme } from "../../common/theme"

interface GameListProps {
    games: Game[]
}

export const GameList = ({ games }: GameListProps) => {
    const itemSeparator = () => <View style={styles.itemSeparator} />

    return (
        <FlatList
            data={games}
            renderItem={({ item }) => <GameListItem item={item} />}
            ItemSeparatorComponent={itemSeparator}
            contentContainerStyle={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: theme.spacing.primary,
    },
    itemSeparator: {
        height: theme.spacing.primary,
    },
})
