import * as React from "react"
import {
    StyleSheet,
    View,
    Modal,
    Text,
    Pressable,
    TouchableHighlight,
} from "react-native"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faAd, faCoffee, faSort } from "@fortawesome/free-solid-svg-icons"

export interface MenuItem {
    text: string
    onPress: () => void
    leftIcon: IconProp
}

interface MenuProps {
    show: boolean
    setShow: (show: boolean) => void
}

const menuItems = [
    {
        text: "Sort by 1",
        onPress: () => {},
        icon: faSort,
    },
]

export const Menu = ({ show, setShow }: MenuProps) => {
    const handlePress = (onPress: () => void) => {
        onPress()
        setShow(false)
    }

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            padding: 12,
        },
        menu: {
            backgroundColor: "#1E1E1E",
            marginLeft: "auto",
            borderRadius: 4,
            borderColor: "rgba(255,255,255,0.1)",
            borderWidth: 1,
        },
        item: {
            flexDirection: "row",
            padding: 10,
        },
        leftIcon: {
            marginRight: 8,
        },
        text: {
            color: "rgba(255,255,255, 0.87)",
        },
    })

    const menu = () => (
        <View style={styles.menu}>
            {menuItems.map((item, index) => (
                <TouchableHighlight
                    onPress={() => handlePress(item.onPress)}
                    style={styles.item}
                    key={index}
                >
                    <>
                        <FontAwesomeIcon
                            icon={item.icon}
                            color="rgba(255,255,255,0.87)"
                            size={20}
                            style={styles.leftIcon}
                        />
                        <Text style={styles.text}>{item.text}</Text>
                    </>
                </TouchableHighlight>
            ))}
        </View>
    )

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={show}
            onRequestClose={() => {
                setShow(!show)
            }}
        >
            <Pressable
                style={styles.container}
                onPress={() => {
                    setShow(false)
                }}
            >
                {menu}
            </Pressable>
        </Modal>
    )
}
