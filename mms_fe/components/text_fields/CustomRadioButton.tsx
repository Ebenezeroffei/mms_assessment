import { Dispatch, SetStateAction } from "react"
import MiscUtils from "@/utils/misc/misc_utils"

type CustomRadioButtonProps = {
    label: string,
    group: string,
    value: string,
    selectedValue: string,
    setValue: Dispatch<SetStateAction<string>>,
}

const CustomRadioButton = ({
    label,
    selectedValue,
    group,
    value,
    setValue,
}: CustomRadioButtonProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label)

    return (
        <section className="px-4 py-1 border flex items-center gap-1 border-gray-300 rounded-4xl">
            <input
                type="radio"
                value={value}
                onChange={() => setValue(_ => value)}
                name={group}
                checked={value === selectedValue}
                id={inputNameAndId}
            />
            <label
                htmlFor={inputNameAndId}
                className="text-sm font-semibold text-gray-800"
            >
                {label}
            </label>
        </section>
    )
}

export default CustomRadioButton