import { useAppContext } from "@/providers/ContextProvider"
import CustomSmallSecondaryButton from "../buttons/CustomSmallSecondaryButton";
import CustomSmallDangerButton from "../buttons/CustomSmallDangerButton";
import MerchantsUtils from "@/utils/merchants/merchants_utils";
import Paginator from "@/@types/entities/Paginator";
import { KeyedMutator } from "swr";

type MerchantDeleteModalProps = {
    itemId: string,
    mutate: KeyedMutator<MerchantEntity[] | undefined>,
}

const MerchantDeleteModal = ({
    itemId,
    mutate
}: MerchantDeleteModalProps) => {
    const { setShowModal } = useAppContext();

    return (
        <section>
            <p>
                Are you sure you want to delete this merchant?
            </p>
            <div className="flex justify-end gap-2 mt-4">
                <CustomSmallSecondaryButton
                    text="No"
                    onPressed={() => setShowModal(_ => false)}
                />
                <CustomSmallDangerButton
                    text="Yes"
                    onPressed={() => MerchantsUtils.deleteMerchant(
                        itemId,
                        mutate,
                        setShowModal,
                    )}
                />
            </div>
        </section>
    )
}

export default MerchantDeleteModal