import { StatusBar } from "expo-status-bar"
import React from "react"
import { View, StyleSheet, FlatList } from "react-native"
import { ListItem } from "./components/ListItem"
import { Header } from "./components/Header"
import { GameList } from "./components/GameList"

export const Main = () => {
    const [games, setGames] = React.useState<Game[]>([])

    React.useEffect(() => {
        fetch("https://www.freetogame.com/api/games")
            .then((res) => res.json())
            .then(
                (result) => {
                    setGames(result)
                },
                (error) => {
                    alert(error)
                }
            )
    }, [])

    return (
        <>
            <Header />
            <GameList games={games} />
            <StatusBar style="light" translucent={false} />
        </>
    )
}
