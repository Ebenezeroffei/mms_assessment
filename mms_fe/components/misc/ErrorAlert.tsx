import CustomSmallButton from "@/components/buttons/CustomSmallButton"
import ImageAssets from "@/constants/misc/image_assets"
import Image from "@/node_modules/next/image"

type ErrorAlertProps = {
    errorMessage?: string,
    onRefreshHandler?: () => {}
}

const ErrorAlert = ({
    errorMessage = 'An unexpected error occurred. Please try again later.',
    onRefreshHandler,
}: ErrorAlertProps) => {
    return (
        <section className="flex justify-center items-center flex-wrap  gap-8 p-4">
            <div className="flex justify-center">
                <Image
                    src={ImageAssets.ErrorImage}
                    alt="Error icon"
                    className="w-[100px] md:w-[150px]"
                />
            </div>
            <div className="flex items-center flex-col space-y-4">
                <h3 className="md:text-5xl text-4xl font-semibold text-gray-600">
                    Oops!!
                </h3>
                <p className="text-center max-w-[300px] text-gray-500">
                    {errorMessage}
                </p>
                <CustomSmallButton
                    onPressed={onRefreshHandler}
                    text="Refresh"
                />
            </div>
        </section>
    )
}

export default ErrorAlert