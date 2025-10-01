import { ButtonProps } from './CustomButton'

const CustomSecondaryButton = ({
    text,
    onPressed = () => { }
}: ButtonProps) => {
    return (
        <button
            type='button'
            onClick={onPressed}
            className="text-xs rounded-xs bg-gray-200 outline-none uppercase tracking-wide transition-colors duration-150 text-gray-700 font-semibold py-2 px-4 hover:bg-gray-300 hover:text-gray-800 cursor-pointer"
        >
            {text}
        </button>
    );
}

export default CustomSecondaryButton;