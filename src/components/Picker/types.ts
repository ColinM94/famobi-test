type PickerOption = {
    text: string
    value: string
}

interface PickerProps {
    value: string
    setValue: (value: string) => void
    show: boolean
    setShow: (show: boolean) => void
    options: PickerOption[]
}
