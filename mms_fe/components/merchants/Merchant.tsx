import Link from "next/link"
import CustomSmallDangerButton from "../buttons/CustomSmallDangerButton"
import CustomSmallSecondaryButton from "../buttons/CustomSmallSecondaryButton"
import MerchantsStatus from "@/constants/merchants/merchants_status"
import { useRouter } from "next/navigation"
import { KeyedMutator } from "swr"
import Paginator from "@/@types/entities/Paginator"
import { useAppContext } from "@/providers/ContextProvider"
import MerchantsUtils from "@/utils/merchants/merchants_utils"

type MerchantProps = {
    merchant: MerchantEntity,
    mutate: KeyedMutator<MerchantEntity[] | undefined>,
}

const Merchant = ({ merchant, mutate }: Readonly<MerchantProps>) => {
    const router = useRouter();
    const contextValues = useAppContext();

    let statusColorCode = merchant.status === MerchantsStatus.ACTIVE
        ? 'bg-green-600'
        : merchant.status === MerchantsStatus.PENDING
            ? 'bg-orange-500'
            : 'bg-red-500';


    return (
        <section className="rounded-xl border border-gray-300 p-4 transition duration-150 hover:bg-primary/5 hover:border-primary/5">
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-semibold text-gray-800">
                    {merchant.business_registration_number}
                </p>
                <section className={`text-xs ${statusColorCode} tracking-wider py-1 px-4 rounded-4xl text-white`}>
                    {merchant.status}
                </section>
            </div>
            <h3 className="text-xl">
                {merchant.name}
            </h3>
            <section className="flex flex-wrap gap-4 justify-between mt-4">
                <div>
                    <p className="text-xs text-gray-500">
                        Phone
                    </p>
                    <Link
                        href={`tel:${merchant.phone}`}
                    >
                        {merchant.phone}
                    </Link>
                </div>
                <div>
                    <p className="text-xs text-gray-500">
                        Email
                    </p>
                    <Link
                        href={`tel:${merchant.email}`}
                    >
                        {merchant.email}
                    </Link>
                </div>
            </section>
            <section className="flex justify-end gap-2 mt-4">
                <CustomSmallSecondaryButton
                    text="Edit"
                    onPressed={() => router.push(`/form?key=${merchant.id}`)}
                />
                <CustomSmallDangerButton
                    text="Delete"
                    onPressed={() => MerchantsUtils.deleteMerchantAttempt(
                        contextValues,
                        merchant.id,
                        mutate,
                    )}
                />
            </section>
        </section>
    )
}

export default Merchant