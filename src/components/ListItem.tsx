import * as React from "react"
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TouchableHighlight,
} from "react-native"

interface ListItemProps {
    item: Game
}

export const ListItem = ({ item }: ListItemProps) => {
    const imageUri = "https://www.freetogame.com/g/16/thumbnail.jpg"

    return (
        <View style={styles.container}>
            <Image
                /* source={require("../assets/thumbnail.jpg")} */
                source={{
                    uri: item.thumbnail,
                }}
                style={styles.image}
                resizeMode="cover"
                borderTopLeftRadius={4}
                borderBottomLeftRadius={4}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title} adjustsFontSizeToFit numberOfLines={1}>
                    {item.title}
                </Text>
                <Text style={styles.subtitle} adjustsFontSizeToFit numberOfLines={2}>
                    {item.publisher}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1E1E1E",
        borderRadius: 8,
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
        color: "rgba(255, 255, 255, 0.87)",
    },
    subtitle: {
        fontSize: 16,
        color: "rgba(255, 255, 255, 0.54)",
    },
})
