import * as React from "react"
import {
    StyleSheet,
    Pressable as RNPressable,
    PressableProps as RNPressableProps,
    StyleProp,
    ViewStyle,
} from "react-native"
import { theme } from "../../common/theme"

interface PressableProps extends RNPressableProps {
    style?: StyleProp<ViewStyle>
}

/** Pressable View */
export const Pressable = (props: PressableProps) => {
    const { children, style, ...rest } = props

    // Combines objects in style array into one object.
    const flattenStyle = StyleSheet.flatten([style])

    return (
        <RNPressable
            style={({ pressed }) => [
                flattenStyle,
                {
                    backgroundColor: pressed
                        ? theme.colors.feedback
                        : flattenStyle?.backgroundColor ?? "rgba(0,0,0,0)",
                },
            ]}
            hitSlop={10}
            {...rest}
        >
            {children}
        </RNPressable>
    )
}
