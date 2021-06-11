import * as React from "react"
import { StyleSheet, Modal as RNModal } from "react-native"
import { Pressable } from "../Pressable"

interface ModalProps {
    children: React.ReactNode | React.ReactNode[]
    show: boolean
    setShow: (show: boolean) => void
}

/** Display content above a view, can be shown and hidden dynamically. */
export const Modal = ({ show, setShow, children }: ModalProps) => {
    return (
        <RNModal
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
                {children}
            </Pressable>
        </RNModal>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        padding: 12,
    },
})
