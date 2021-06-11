import React from "react"
import { StyleSheet, ActivityIndicator, SafeAreaView } from "react-native"
import { theme } from "../../common/theme"
import { HomeHeader } from "./HomeHeader"
import { HomeGameList } from "./HomeGameList"

/** Loads the data from the API. Also displays a loading indicator. */
export const Home = () => {
    const [games, setGames] = React.useState<Game[]>([])
    const [category, setCategory] = React.useState("")
    const [platform, setPlatform] = React.useState("")
    const [sort, setSort] = React.useState("relevance")
    const [loading, setLoading] = React.useState(false)

    let url = "https://www.freetogame.com/api/games?"

    React.useEffect(() => {
        if (category !== "") url += `&category=${category}`
        if (platform !== "") url += `&platform=${platform}`
        if (sort !== "") url += `&sort-by=${sort}`

        fetchData()
    }, [category, sort, platform])

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
        <SafeAreaView style={styles.container}>
            <HomeHeader
                category={category}
                setCategory={setCategory}
                platform={platform}
                setPlatform={setPlatform}
                sort={sort}
                setSort={setSort}
            />
            <HomeGameList games={games} />
            <ActivityIndicator
                size="large"
                color={theme.colors.primary}
                style={styles.loadingSpinner}
                animating={loading}
            />
        </SafeAreaView>
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
