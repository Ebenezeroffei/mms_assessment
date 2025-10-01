import { ButtonProps } from './CustomButton'

const CustomSmallButton = ({
    text,
    onPressed = () => { }
}: ButtonProps) => {
    return (
        <button
            type='button'
            onClick={onPressed}
            className="text-xs rounded-4xl bg-primary outline-none uppercase tracking-wider transition-colors duration-150 text-white font-semibold py-2 px-4 hover:bg-secondary cursor-pointer"
        >
            {text}
        </button>
    );
}

export default CustomSmallButton;