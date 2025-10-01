'use client';

import { useEffect, useState } from "react";
import FormWrapper from "../misc/FormWrapper";
import CustomTextField from "../text_fields/CustomTextField";
import CustomPhoneNumberField from "../text_fields/CustomPhoneNumberField";
import CustomButton from "../buttons/CustomButton";
import CustomEmailField from "../text_fields/CustomEmailField";
import CustomRadioButton from "../text_fields/CustomRadioButton";
import useSWR from "swr";
import Endpoints from "@/constants/misc/endpoints";
import MiscUtils from "@/utils/misc/misc_utils";
import MerchantsUtils from "@/utils/merchants/merchants_utils";
import { useRouter } from "next/navigation";
import FormSkeleton from "../skeleton/FormSkeleton";
import MerchantsStatus from "@/constants/merchants/merchants_status";

const MerchantFormPageWrapper = () => {

  const [name, setName] = useState('');
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [status, setStatus] = useState('Pending')
  const [isPageReady, setIsPageReady] = useState(false);
  const [itemId, setItemId] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URL(window.location.href).searchParams;
    if (searchParams.has('key')) {
      const itemId = String(searchParams.get('key'));
      MiscUtils.getData<MerchantEntity>(Endpoints.merchants.detail(itemId))
        .then(data => {
          if (data) {
            setName(_ => data.name);
            setEmail(_ => data.email);
            setPhone(_ => data.phone);
            setBusinessRegistrationNumber(_ => data.business_registration_number);
            setStatus(_ => data.status);
            setItemId(_ => data.id);
          }
        })
        .catch(() => { })
        .finally(() => {
          setIsPageReady(_ => true);
        })
    }
    else {
      setIsPageReady(_ => true);
    }
  }, [])

  if (isPageReady)
    return (
      <section>
        <FormWrapper>
          <CustomTextField
            label="Name"
            value={name}
            setValue={setName}
          />
          <CustomTextField
            label="Business Registration Number"
            value={businessRegistrationNumber}
            setValue={setBusinessRegistrationNumber}
          />
          <CustomEmailField
            value={email}
            setValue={setEmail}
          />
          <CustomPhoneNumberField
            label="Phone"
            value={phone}
            setValue={setPhone}
          />
        </FormWrapper>
        <div
          className="mb-12"
        >
          <p
            className="text-xs capitalize mb-2 font-semibold tracking-wide text-gray-800"
          >
            Status
          </p>
          <section
            className="flex gap-2 items-center"
          >
            <CustomRadioButton
              group="status"
              label={MerchantsStatus.PENDING}
              selectedValue={status}
              value={MerchantsStatus.PENDING}
              setValue={setStatus}
            />
            <CustomRadioButton
              group="status"
              label={MerchantsStatus.ACTIVE}
              selectedValue={status}
              value={MerchantsStatus.ACTIVE}
              setValue={setStatus}
            />
            <CustomRadioButton
              group="status"
              label={MerchantsStatus.SUSPENDED}
              selectedValue={status}
              value={MerchantsStatus.SUSPENDED}
              setValue={setStatus}
            />
          </section>
        </div>
        <CustomButton
          text="Save"
          isLoading={isButtonLoading}
          onPressed={() => MerchantsUtils.saveMerchant(
            name,
            businessRegistrationNumber,
            email,
            phone,
            status,
            router,
            setIsButtonLoading,
            itemId,
          )}
        />
      </section>
    )

  return (
    <FormSkeleton />
  )
}

export default MerchantFormPageWrapper