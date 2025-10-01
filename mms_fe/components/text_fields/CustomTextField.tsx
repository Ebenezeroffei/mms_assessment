import { Dispatch, SetStateAction, useRef, useState } from "react";
import { MdClose } from "react-icons/md"
import TextFieldUtils from "@/utils/components/text_field_utils";
import MiscUtils from "@/utils/misc/misc_utils"
import Validators from "@/constants/misc/validators";

export type TextFieldProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    label?: string,
    onSubmitHandler?: () => void,
    pattern?: RegExp,
    showCloseButton?: boolean,
    isRequired?: boolean,
    errorText?: string,
    helpText?: string,
    textType?: string,
    min?: number,
    max?: number,
    step?: number,
    readOnly?: boolean,
}

const CustomTextField = ({
    value,
    setValue,
    label = '',
    max,
    min,
    step,
    pattern = Validators.General,
    showCloseButton = true,
    isRequired = true,
    onSubmitHandler = () => { },
    textType = "text",
    helpText = "",
    errorText = "Please provide a value for this field.",
    readOnly = false,
}: TextFieldProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isError, setIsError] = useState(false);
    const [hasValue, setHasValue] = useState(Boolean(value));

    return (
        <section className="pb-2">
            {/* Label */}
            <div>
                <label
                    htmlFor={inputNameAndId}
                    className="text-xs capitalize ml-2 font-semibold tracking-wide text-gray-800 flex"
                >
                    {label}:
                    {
                        isRequired && (
                            <span
                                className="text-red-500 ml-0.5"
                            >
                                *
                            </span>
                        )
                    }
                </label>
            </div>
            {/* Input */}
            <div className="py-2 px-4 my-2  flex bg-gray-200 transition-all duration-100 items-center gap-x-2 rounded-4xl focus-within:bg-white">
                <input
                    type={textType}
                    id={inputNameAndId}
                    name={inputNameAndId}
                    ref={inputRef}
                    value={value}
                    onKeyUp={(ele) => TextFieldUtils.onKeyUpHandler(
                        ele,
                        onSubmitHandler,
                    )}
                    min={min}
                    max={max}
                    readOnly={readOnly}
                    step={step}
                    onBlur={() => TextFieldUtils.onTextInputOnBlurHandler(
                        inputRef,
                        isRequired,
                        pattern,
                        setIsError,
                    )}
                    onChange={(ele) => TextFieldUtils.onTextValueChangeHandler(
                        ele,
                        setValue,
                        setHasValue,
                    )}
                    className="flex-auto text-gray-800 text-sm outline-none"
                />
                {/* Clear Button */}
                {
                    (hasValue && showCloseButton) && (
                        <section
                            className="bg-red-100 p-0.5 cursor-pointer transition-colors duration-150 hover:bg-red-200"
                            onClick={() => TextFieldUtils.clearTextValue(
                                inputRef,
                                setValue,
                                setHasValue,
                                setIsError,
                            )}
                        >
                            <MdClose
                                className="text-red-600"
                                size={15}
                            />
                        </section>
                    )
                }
            </div>
            {/* Error or Help Texts */}
            {
                isError ? (
                    <p className="text-xs ml-2 text-red-500 pl-1">
                        {errorText}
                    </p>
                ) : (

                    <p className="text-xs ml-2 text-gray-600 pl-1">
                        {helpText}
                    </p>
                )
            }
        </section>
    )
}

export default CustomTextField