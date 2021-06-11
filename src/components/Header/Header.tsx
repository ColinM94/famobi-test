import * as React from "react"
import { StyleSheet, View, Text, TouchableHighlight } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons"
import { Pressable } from "../Pressable"
import { Picker } from "../Picker"

export const Header = ({ category, setCategory }: HeaderProps) => {
    const [showMenu, setShowMenu] = React.useState(false)
    const [showPicker, setShowPicker] = React.useState(false)
    const [filterValue, setFilterValue] = React.useState("")

    const pickerOptions: PickerOption[] = [
        {
            text: "MMORPG",
            value: "mmorpg",
        },
        {
            text: "Shooter",
            value: "shooter",
        },
        {
            text: "Strategy",
            value: "strategy",
        },
        {
            text: "Action",
            value: "action",
        },
        {
            text: "Racing",
            value: "racing",
        },
        {
            text: "Sports",
            value: "sports",
        },
        {
            text: "Survival",
            value: "survival",
        },
        {
            text: "Social",
            value: "social",
        },
        {
            text: "No Filter",
            value: "",
        },
    ]

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

                <Pressable style={[styles.btn, styles.rightBtn]}>
                    <FontAwesomeIcon
                        icon={faSort}
                        color="rgba(255,255,255,0.87)"
                        size={24}
                    />
                </Pressable>
                <Pressable
                    onPress={() => setShowPicker(!showPicker)}
                    style={[styles.btn]}
                >
                    <FontAwesomeIcon
                        icon={faFilter}
                        color="rgba(255,255,255,0.87)"
                        size={22}
                    />
                </Pressable>
            </View>
            <Picker
                show={showPicker}
                setShow={setShowPicker}
                options={pickerOptions}
                value={category}
                setValue={setCategory}
            />
        </>
    )
}
