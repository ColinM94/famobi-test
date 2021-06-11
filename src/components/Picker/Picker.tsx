import * as React from "react"
import { StyleSheet, Modal, View, FlatList, Text } from "react-native"
import { Pressable } from "../Pressable"
import { theme } from "../../common/theme"

export const Picker = ({ value, setValue, show, setShow, options }: PickerProps) => {
    const hidePicker = () => {
        setShow(false)
    }

    const styles = StyleSheet.create({
        container: {
            position: "absolute",
            bottom: 0,
            backgroundColor: theme.colors.card,
            width: "100%",
            borderTopColor: "rgba(255,255,255,0.2)",
            borderTopWidth: 1,
        },
        item: {
            padding: 16,
        },
        selectableItem: {
            backgroundColor: theme.colors.card,
        },
    })

    const handlePress = (item: PickerOption) => {
        setValue(item.value)
        hidePicker()
    }

    const renderItem = ({ item }: { item: PickerOption }) => (
        <Pressable
            onPress={() => handlePress(item)}
            style={[styles.item, styles.selectableItem]}
        >
            <Text
                style={{
                    color:
                        item.value === value
                            ? theme.colors.text.primary
                            : theme.colors.text.secondary,
                }}
            >
                {item.text}
            </Text>
        </Pressable>
    )

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => {
                setShow(!show)
            }}
        >
            <View style={styles.container}>
                <FlatList
                    data={options}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.value}
                />
            </View>
        </Modal>
    )
}
