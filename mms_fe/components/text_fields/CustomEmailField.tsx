import Validators from "@/constants/misc/validators"
import CustomTextField, { TextFieldProps } from "./CustomTextField"


const CustomEmailField = ({
    value,
    setValue,
    isRequired = true,
    onSubmitHandler = () => { },
}: TextFieldProps) => {
    return (
        <CustomTextField
            label="Email"
            value={value}
            setValue={setValue}
            pattern={Validators.Email}
            isRequired={isRequired}
            errorText="Invalid Email"
            textType="email"
            onSubmitHandler={onSubmitHandler}
        />
    )
}

export default CustomEmailField