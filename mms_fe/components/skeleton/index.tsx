type SkeletonProps = {
    className: string,
}

const Skeleton = ({
    className,
}: SkeletonProps) => {
    return (
        <section
            className={`animate-pulse bg-primary/10 ${className}`}
        >

        </section>
    )
}

export default Skeleton