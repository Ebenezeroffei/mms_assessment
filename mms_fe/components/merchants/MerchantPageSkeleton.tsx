import { useId } from "react";
import Skeleton from "../skeleton"

const MerchantPageSkeleton = () => {
    const randomId = useId();
    const skeletons = Array.from({ length: 9 });

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                skeletons.map((ele, index) => (
                    <Skeleton
                        key={`${randomId}_${index}_merchant_skeleton`}
                        className="h-[194px] rounded-xl"
                    />
                ))
            }
        </section>
    )
}

export default MerchantPageSkeleton