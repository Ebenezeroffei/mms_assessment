import Skeleton from "."

const CustomButtonSkeleton = () => {
    return (
        <section className="my-6 flex justify-center">
            <Skeleton
                className="flex-1 h-[40px] max-w-[300px] rounded-4xl"
            />
        </section>
    )
}

export default CustomButtonSkeleton