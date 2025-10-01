import { isValidPhoneNumber } from "react-phone-number-input";
import React, { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";

class TextFieldUtils {
    static onTextValueChangeHandler = (
        ele: ChangeEvent<HTMLInputElement>,
        setValue: Dispatch<SetStateAction<string>>,
        setHasValue: Dispatch<SetStateAction<boolean>>,
    ) => {
        const value = ele.target.value;
        setHasValue(_ => Boolean(value))
        setValue(_ => value);
    }

    static clearTextValue = (
        inputRef: RefObject<HTMLInputElement | null>,
        setValue: Dispatch<SetStateAction<string>>,
        setHasValue: Dispatch<SetStateAction<boolean>>,
        setIsError: Dispatch<SetStateAction<boolean>>,
    ) => {
        setValue(_ => '');
        setHasValue(_ => false);
        setIsError(_ => false);
        inputRef.current?.focus();
    }

    static onTextInputOnBlurHandler = (
        inputRef: RefObject<HTMLInputElement | null | HTMLTextAreaElement>,
        isRequired: boolean,
        pattern: RegExp,
        setIsError: Dispatch<SetStateAction<boolean>>,
    ) => {
        if (isRequired) {
            const value = String(inputRef.current?.value);
            setIsError(_ => !pattern.test(value))
        }
    }

    static onKeyUpHandler = (
        ele: React.KeyboardEvent<HTMLInputElement>,
        onSubmitHandler: () => void = () => { }
    ) => {
        if (ele.key === 'Enter') {
            onSubmitHandler();
        }
    }

    // Phone number
    static onPhoneNumberValueChangeHandler = (
        value: string,
        setValue: Dispatch<SetStateAction<string>>,
        setHasValue: Dispatch<SetStateAction<boolean>>,
    ) => {
        setHasValue(_ => Boolean(value))
        setValue(_ => value);
    }

    static onPhoneNumberInputBlurHandler = (
        value: string,
        isRequired: boolean,
        setIsError: Dispatch<SetStateAction<boolean>>,
    ) => {
        isRequired && setIsError(_ => !isValidPhoneNumber(value))

    }

    static clearPhoneInputValue = (
        inputRef: any,
        setValue: Dispatch<SetStateAction<string>>,
        setHasValue: Dispatch<SetStateAction<boolean>>,
    ) => {
        setValue(_ => '')
        setHasValue(_ => false);
        inputRef.current.focus()

    }
}


export default TextFieldUtils;