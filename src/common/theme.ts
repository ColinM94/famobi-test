const colors = {
    primary: "#4ea33c",
    background: "#121212",
    card: "#1E1E1E",
    text: {
        primary: "rgba(255, 255, 255, 0.87)",
        secondary: "rgba(255, 255, 255, 0.54)",
    },
    feedback: "rgba(255,255,255,0.1)",
}

export const theme = {
    colors: colors,
    typography: {
        h1: {
            fontSize: 18,
            letterSpacing: 0.25,
            color: colors.text.primary,
        },
        h2: {
            fontSize: 17,
            letterSpacing: 0,
            color: colors.text.primary,
        },
        body: {
            fontSize: 16,
            letterSpacing: 0.5,
            color: colors.text.primary,
        },
        subtitle: {
            fontSize: 14,
            letterSpacing: 0.15,
            color: colors.text.secondary,
        },
    },
    spacing: {
        primary: 12,
        secondary: 8,
    },
    roundness: 4,
}
