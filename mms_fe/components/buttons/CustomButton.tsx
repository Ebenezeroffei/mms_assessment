import ImageAssets from "@/constants/misc/image_assets"
import Image from "next/image"

export type ButtonProps = {
    text: string,
    onPressed?: () => void,
    isLoading?: boolean,
}


const CustomButton = ({
    text,
    onPressed = () => { },
    isLoading = false,

}: ButtonProps) => {
    if (isLoading) {
        return (
            <section className="flex justify-center items-center my-6">
                <button
                    type="button"
                    className="outline-none flex justify-center items-center rounded-4xl cursor-not-allowed bg-primary p-3 max-w-[300px] flex-auto font-semibold uppercase text-xs tracking-wide text-white"
                >
                    <Image
                        src={ImageAssets.Preloader}
                        alt="Preloader"
                        className="w-[16px]"
                        unoptimized={true}
                    />
                </button>
            </section>
        )
    }

    return (
        <section className="flex justify-center items-center my-6">
            <button
                onClick={onPressed}
                type="button"
                className="outline-none rounded-4xl cursor-pointer bg-primary p-3 max-w-[300px] flex-auto font-semibold uppercase text-xs tracking-wide text-white transition-all duration-300 ease-in-out hover:bg-secondary"
            >
                {text}
            </button>
        </section>
    )
}

export default CustomButton