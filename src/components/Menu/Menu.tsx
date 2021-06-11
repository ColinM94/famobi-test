import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Modal } from "../Modal"
import { Pressable } from "../Pressable"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface MenuProps {
    show: boolean
    setShow: (show: boolean) => void
    menuItems: MenuItem[]
}

export type MenuItem = {
    text: string
    onPress: () => void
    icon: IconProp
}

export const Menu = ({ show, setShow, menuItems }: MenuProps) => {
    const handlePress = (onPress: () => void) => {
        setShow(false)
        onPress()
    }

    return (
        <Modal show={show} setShow={setShow}>
            <View style={styles.menu}>
                {menuItems.map((item, index) => (
                    <Pressable
                        onPress={() => handlePress(item.onPress)}
                        style={styles.item}
                        key={index}
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            color="rgba(255,255,255,0.87)"
                            size={20}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>{item.text}</Text>
                    </Pressable>
                ))}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
    icon: {
        marginRight: 8,
    },
    text: {
        color: "rgba(255,255,255, 0.87)",
    },
})
