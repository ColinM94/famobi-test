import * as React from "react"
import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons"
import { MenuItem } from "../../components/Menu"
import { Picker } from "../../components/Picker"
import { categoryOptions, platformOptions, sortOptions } from "./filterOptions"
import { Header } from "../../components/Header"

interface HomeHeaderProps {
    category: string
    setCategory: (category: string) => void
    platform: string
    setPlatform: (platform: string) => void
    sort: string
    setSort: (sort: string) => void
}

export const HomeHeader = (props: HomeHeaderProps) => {
    const { category, setCategory, sort, setSort, platform, setPlatform } = props

    const [showCategoryPicker, setShowCategoryPicker] = React.useState(false)
    const [showPlatformPicker, setShowPlatformPicker] = React.useState(false)
    const [showSortPicker, setShowSortPicker] = React.useState(false)

    const menuItems: MenuItem[] = [
        {
            text: "Category",
            onPress: () => setShowCategoryPicker(!showCategoryPicker),
            icon: faFilter,
        },
        {
            text: "Platform",
            onPress: () => setShowPlatformPicker(!showPlatformPicker),
            icon: faFilter,
        },
        {
            text: "Sort",
            onPress: () => setShowSortPicker(!showSortPicker),
            icon: faSort,
        },
    ]

    return (
        <>
            <Header title="Famobi Test" menuItems={menuItems} />

            <Picker
                value={category}
                setValue={setCategory}
                options={categoryOptions}
                show={showCategoryPicker}
                setShow={setShowCategoryPicker}
            />
            <Picker
                value={platform}
                setValue={setPlatform}
                options={platformOptions}
                show={showPlatformPicker}
                setShow={setShowPlatformPicker}
            />
            <Picker
                value={sort}
                setValue={setSort}
                options={sortOptions}
                show={showSortPicker}
                setShow={setShowSortPicker}
            />
        </>
    )
}
