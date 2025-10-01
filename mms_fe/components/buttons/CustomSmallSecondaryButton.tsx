import { ButtonProps } from './CustomButton'

const CustomSmallSecondaryButton = ({
    text,
    onPressed = () => { }
}: ButtonProps) => {
    return (
        <button
            type='button'
            onClick={onPressed}
            className="text-xs rounded-4xl bg-black outline-none uppercase tracking-wider transition-colors duration-150 text-white font-semibold py-2 px-4 hover:bg-black/70 cursor-pointer"
        >
            {text}
        </button>
    );
}

export default CustomSmallSecondaryButton;