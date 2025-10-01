import Validators from "@/constants/misc/validators";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import MiscUtils from "../misc/misc_utils";
import { api } from "@/lib/axios_options";
import Endpoints from "@/constants/misc/endpoints";
import { toast } from "react-toastify";
import { ContextValuesType } from "@/providers/ContextProvider";
import MerchantDeleteModal from "@/components/merchants/MerchantDeleteModal";
import { KeyedMutator } from "swr";
import Paginator from "@/@types/entities/Paginator";

class MerchantsUtils {
    static saveMerchant = async (
        name: string,
        businessRegistrationNumber: string,
        email: string,
        phone: string,
        status: string,
        router: AppRouterInstance,
        setIsButtonLoading: Dispatch<SetStateAction<boolean>>,
        itemId?: string,
    ) => {
        if (name && businessRegistrationNumber && Validators.Email.test(email) && isValidPhoneNumber(phone)) {
            setIsButtonLoading(_ => true);
            try {
                const data = {
                    name,
                    email,
                    phone,
                    status,
                    business_registration_number: businessRegistrationNumber,
                }

                itemId
                    ? await api.put(
                        Endpoints.merchants.detail(itemId),
                        data
                    )
                    : await api.post(
                        Endpoints.merchants.listOrCreate,
                        data
                    )

                toast.success(
                    itemId
                        ? "Merchant details saved"
                        : "Merchant details updated"
                )
                router.replace('/');
            }
            catch (err) {
                await MiscUtils.evaluateError(err);
            }
            finally {
                setIsButtonLoading(_ => false);
            }

        }
    }


    static deleteMerchantAttempt = (
        contextValues: ContextValuesType,
        itemId: string,
        mutate: KeyedMutator<Paginator<MerchantEntity> | undefined>,
    ) => {
        const { setModalTitle, setModalContent, setShowModal } = contextValues;

        setModalTitle(_ => "Delete Merchant")
        setModalContent(_ => <MerchantDeleteModal
            itemId={itemId}
            mutate={mutate}
        />)
        setShowModal(_ => true);
    }

    static deleteMerchant = async (
        itemId: string,
        mutate: KeyedMutator<Paginator<MerchantEntity> | undefined>,
        setShowModal: Dispatch<SetStateAction<boolean>>,
    ) => {
        setShowModal(_ => false,)
        toast.loading("Deleting merchant")
        await api.delete(Endpoints.merchants.detail(itemId));
        toast.dismiss()
        toast.success("Merchant deleted");
        mutate();
    }
}

export default MerchantsUtils;