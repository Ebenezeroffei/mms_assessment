import { ButtonProps } from './CustomButton'

const CustomSuccessButton = ({
    text,
    onPressed = () => { }
}: ButtonProps) => {
    return (
        <button
            type='button'
            onClick={onPressed}
            className="text-xs bg-green-100 rounded-xs outline-none uppercase tracking-wide transition-colors duration-150 text-green-700 font-semibold py-2 px-4 hover:bg-green-200 hover:text-green-800 cursor-pointer"
        >
            {text}
        </button>
    );
}

export default CustomSuccessButton;