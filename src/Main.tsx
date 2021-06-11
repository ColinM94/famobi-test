import { StatusBar } from "expo-status-bar"
import React from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import { Header } from "./components/Header"
import { GameList } from "./components/GameList"
import { theme } from "./common/theme"

export const Main = () => {
    const [games, setGames] = React.useState<Game[]>([])
    const [category, setCategory] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    let url = "https://www.freetogame.com/api/games?"

    React.useEffect(() => {
        if (category !== "") url += `category=${category}`
        fetchData()
    }, [category])

    const fetchData = async () => {
        setLoading(true)

        try {
            let response = await fetch(url)
            let json = await response.json()
            setGames(json)
        } catch (error) {
            alert(error)
        }

        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <Header category={category} setCategory={setCategory} />
            <GameList games={games} />
            <StatusBar style="light" translucent={false} />
            <ActivityIndicator
                size="large"
                color={theme.colors.primary}
                style={styles.loadingSpinner}
                animating={loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    loadingSpinner: {
        position: "absolute",
        top: "50%",
        bottom: "50%",
        alignSelf: "center",
    },
})
