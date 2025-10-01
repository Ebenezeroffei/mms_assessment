import { ButtonProps } from './CustomButton'

const CustomDangerButton = ({
    text,
    onPressed = () => { }
}: ButtonProps) => {
    return (
        <button
            type='button'
            onClick={onPressed}
            className="text-xs bg-red-100 rounded-xs outline-none uppercase tracking-wide transition-colors duration-150 text-red-500 font-semibold py-2 px-4 hover:bg-red-200 hover:text-red-600 cursor-pointer"
        >
            {text}
        </button>
    );
}

export default CustomDangerButton