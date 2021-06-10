import * as React from "react"
import { StyleSheet, View, Text, TouchableHighlight } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { Menu } from "./Menu"

export const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false)

    const styles = StyleSheet.create({
        container: {
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#1E1E1E",
            paddingHorizontal: 12,
        },
        title: {
            position: "absolute",
            color: "rgba(255,255,255,0.87)",
            fontSize: 24,
        },
        btn: {
            padding: 8,
            borderRadius: 60,
        },
        leftBtn: {
            marginRight: "auto",
        },
        rightBtn: {
            marginLeft: "auto",
        },
    })

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Famobi Test</Text>
                <TouchableHighlight
                    style={[styles.btn, styles.rightBtn]}
                    onPress={() => setShowMenu(!showMenu)}
                    underlayColor="#424242"
                >
                    <FontAwesomeIcon
                        icon={faEllipsisV}
                        color="rgba(255,255,255,0.87)"
                        size={24}
                    />
                </TouchableHighlight>
            </View>
            <Menu show={showMenu} setShow={setShowMenu} />
        </>
    )
}
