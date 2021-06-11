import * as React from "react"
import { StyleSheet, View, Text } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faArrowLeft, faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { Pressable } from "../Pressable"
import { Menu, MenuItem } from "../Menu/Menu"
import { useNavigation } from "@react-navigation/native"

interface HeaderProps {
    title?: string
    backBtnEnabled?: boolean
    menuItems?: MenuItem[]
}

export const Header = (props: HeaderProps) => {
    const navigation = useNavigation()
    const { backBtnEnabled, title, menuItems } = props
    const [showMenu, setShowMenu] = React.useState(false)

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                {backBtnEnabled && (
                    <Pressable
                        onPress={() => navigation.goBack()}
                        style={[styles.btn, styles.leftBtn]}
                    >
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            color="rgba(255,255,255,0.87)"
                            size={24}
                        />
                    </Pressable>
                )}
                {menuItems && (
                    <>
                        <Pressable
                            onPress={() => setShowMenu(!showMenu)}
                            style={[styles.btn, styles.rightBtn]}
                        >
                            <FontAwesomeIcon
                                icon={faEllipsisV}
                                color="rgba(255,255,255,0.87)"
                                size={24}
                            />
                        </Pressable>
                        <Menu
                            show={showMenu}
                            setShow={setShowMenu}
                            menuItems={menuItems}
                        />
                    </>
                )}
            </View>
        </>
    )
}

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
