import * as React from "react"
import { FlatList, View, StyleSheet } from "react-native"
import { ListItem } from "./ListItem"

interface GameListProps {
    games: Game[]
}

export const GameList = ({ games }: GameListProps) => {
    const itemSeparator = () => <View style={styles.itemSeparator} />

    return (
        <FlatList
            data={games}
            renderItem={({ item }) => <ListItem item={item} />}
            ItemSeparatorComponent={itemSeparator}
            contentContainerStyle={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: "#121212",
    },
    itemSeparator: {
        height: 12,
    },
})
