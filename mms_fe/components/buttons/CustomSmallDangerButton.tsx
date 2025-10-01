import { ButtonProps } from './CustomButton'

const CustomSmallDangerButton = ({
    text,
    onPressed = () => { }
}: ButtonProps) => {
    return (
        <button
            type='button'
            onClick={onPressed}
            className="text-xs rounded-4xl bg-red-800 outline-none uppercase tracking-wider transition-colors duration-150 text-white font-semibold py-2 px-4 hover:bg-red-700 cursor-pointer"
        >
            {text}
        </button>
    );
}

export default CustomSmallDangerButton