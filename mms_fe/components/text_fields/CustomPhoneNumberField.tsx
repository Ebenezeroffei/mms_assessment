import { useRef, useState } from "react"
import PhoneInput from "react-phone-number-input"
import { TextFieldProps } from "./CustomTextField"
import MiscUtils from "@/utils/misc/misc_utils"
import TextFieldUtils from "@/utils/components/text_field_utils"
import { MdClose } from "react-icons/md"


const CustomPhoneNumberField = ({
  label = 'Phone Number',
  value,
  setValue,
  isRequired = true,
  helpText = '',
  errorText = "Provide a valid phone number",
}: TextFieldProps) => {

  const inputNameAndId = MiscUtils.generateInputNameAndId(label ?? '');
  const inputRef = useRef<any>(null);
  const [isError, setIsError] = useState(false);
  const [hasValue, setHasValue] = useState(Boolean(value));
  return (
    <section className="pb-2">
      {/* Label */}
      <div>
        <label
          htmlFor={inputNameAndId}
          className="text-xs font-semibold capitalize tracking-wide text-gray-800 flex"
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
        <PhoneInput
          focusInputOnCountrySelection={true}
          ref={inputRef}
          international={true}
          defaultCountry="GH"
          initialValueFormat="national"
          value={value}
          countryCallingCodeEditable={false}
          onChange={(value) => TextFieldUtils.onPhoneNumberValueChangeHandler(
            value as string,
            setValue,
            setHasValue,
          )}
          onBlur={() => TextFieldUtils.onPhoneNumberInputBlurHandler(
            value,
            isRequired,
            setIsError
          )}
          className="flex-auto"
        />

        {/* Clear Button */}
        {
          hasValue && (
            <section
              className="bg-red-100 p-0.5 cursor-pointer transition-colors duration-150 hover:bg-red-200"
            >
              <MdClose
                onClick={() => TextFieldUtils.clearPhoneInputValue(
                  inputRef,
                  setValue,
                  setHasValue,
                )}
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
          <p className="text-xs text-red-500 pl-1">
            {errorText}
          </p>
        ) : (

          <p className="text-xs text-gray-500 pl-1">
            {helpText}
          </p>
        )
      }
    </section>
  )
}

export default CustomPhoneNumberField