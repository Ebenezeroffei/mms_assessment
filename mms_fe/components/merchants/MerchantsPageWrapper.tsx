'use client';

import Paginator from "@/@types/entities/Paginator"
import Endpoints from "@/constants/misc/endpoints"
import MiscUtils from "@/utils/misc/misc_utils"
import useSWR from "swr"
import Merchant from "./Merchant";
import MerchantPageSkeleton from "./MerchantPageSkeleton";
import ErrorAlert from "../misc/ErrorAlert";
import NoItem from "../misc/NoItem";
import { useRouter } from "next/navigation";
import { useId } from "react";


const MerchantsPageWrapper = () => {
    const { data, isLoading, isValidating, error, mutate } = useSWR(Endpoints.merchants.listOrCreate, MiscUtils.getData<MerchantEntity[]>, {
        revalidateOnFocus: false,
    })

    const router = useRouter()
    const randomId = useId();

    if (isLoading || isValidating) return (
        <MerchantPageSkeleton />
    )

    else if (error) return (
        <ErrorAlert
            errorMessage={error.message}
            onRefreshHandler={mutate}
        />
    )


    return (
        data?.length ?? 0 > 0
            ? (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data?.map((ele, index) => (
                            <Merchant
                                key={`${index}_${randomId}_merchant`}
                                merchant={ele}
                                mutate={mutate}
                            />
                        ))
                    }
                </section>

            ) :
            (
                <NoItem
                    text="No Merchants"
                    addItemOnPressedHandler={() => router.push('/form')}
                    addItemText="Add Merchant"
                />
            )

    )
}

export default MerchantsPageWrapper