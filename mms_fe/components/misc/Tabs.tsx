import { Dispatch, PropsWithChildren, SetStateAction } from "react"

type TabProps = {
    text: string,
    value: string | number,
    selectedValue: string | number,
    setSelectedValue: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>,
}

const Tab = ({
    text,
    value,
    selectedValue,
    setSelectedValue,
}: TabProps) => {
    const isSelected = selectedValue === value;

    if (isSelected) {
        return (
            <section
                className="text-xs cursor-pointer uppercase text-white font-semibold px-2 py-1 bg-primary/80 rounded-xs"
            >
                {text}
            </section>
        )
    }

    return (
        <section
            onClick={() => setSelectedValue(value as any)}
            className="text-xs uppercase cursor-pointer text-gray-600 font-semibold px-2 py-1 transition-colors duration-150 bg-gray-100 rounded-xs hover:bg-gray-200"
        >
            {text}
        </section>
    )
}

const Tabs = ({ children }: PropsWithChildren) => {
    return (
        <section className="flex gap-2">
            {children}
        </section>
    )
}

export { Tabs, Tab }