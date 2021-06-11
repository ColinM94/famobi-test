import * as React from "react"
import { FlatList, View, StyleSheet } from "react-native"
import { HomeGameListItem } from "./HomeGameListItem"
import { theme } from "../../common/theme"

interface HomeGameListProps {
    games: Game[]
}

export const HomeGameList = ({ games }: HomeGameListProps) => {
    const itemSeparator = () => <View style={styles.itemSeparator} />

    return (
        <FlatList
            data={games}
            renderItem={({ item }) => <HomeGameListItem item={item} />}
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
