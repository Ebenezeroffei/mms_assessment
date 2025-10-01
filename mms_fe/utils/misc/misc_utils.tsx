import ErrorEntity from "@/@types/entities/ErrorEntity";
import { api } from "@/lib/axios_options";
import axios, { AxiosHeaders } from "axios";
import { isAxiosError } from "axios";
import { KeyedMutator } from "swr";
import { ContextValuesType } from "@/providers/ContextProvider";
import { toast } from "react-toastify";


class MiscUtils {
    static generateInputNameAndId = (
        label: string
    ) => {
        return `${label.trim().replace(' ', '-').toLowerCase()}`;
    }


    static evaluateError = async (
        error: any,
        throwException: boolean = false,
    ) => {
        toast.dismiss();
        if (isAxiosError(error)) {
            const errorResponse = error.response;
            const errorData: ErrorEntity = errorResponse?.data;
            const errorMessages: string[] = []
            Object.keys(errorData.errors).forEach(errorKey => {
                const sanitizedErrorKey = errorKey.split('_').join(' ').trim()
                const errorMessage = errorKey === 'detail'
                    ? errorData.errors[errorKey]
                    : `${MiscUtils.capitalize(sanitizedErrorKey)} : ${errorData.errors[errorKey]}`

                if (!throwException) {
                    toast.error(errorMessage)
                }
                errorMessages.push(errorMessage)
            })
            if (throwException) {
                throw new Error(errorMessages.join('; '));
            }
        }
        else {
            error as Error;
            toast.error(String(error))
        }
    }

    static capitalize = (text: string) => {
        const words = text.trim().split(' ');
        let result = "";
        words.forEach(word => {
            result += `${word[0].toUpperCase()}${word.substring(1,)} `
        });
        return result.trim();
    }


    static getData = async <T,>(
        url: string,
        throwException: boolean = true,
    ) => {
        try {
            const res = await api.get(url, {
            })
            return res.data as T;
        }
        catch (err) {
            await MiscUtils.evaluateError(err, throwException);
        }

    }


    static debounce = (
        inputId: string,
        onDebounceHandler: () => void,
        delay: number = 350,
    ) => {
        let timeout: NodeJS.Timeout;

        document.getElementById(inputId)?.addEventListener("keyup", () => {
            clearTimeout(timeout); // Clear previous timeout
            timeout = setTimeout(onDebounceHandler, delay)
        });
    }

    static getValueByKeyPath = (obj: any, keyPath: string) => {
        return keyPath.split('.').reduce((acc, key) => acc?.[key], obj);
    };

    static appendQueryString = (
        url: string,
        key: string,
        value: string,
    ) => {
        const urlLst = url.split('?')
        if (urlLst.length == 2 && urlLst[1]) {
            const searchParams = new URLSearchParams(urlLst[1]);
            searchParams.set(key, value);
            return `${urlLst[0]}?${searchParams.toString()}`
        }
        return `${url}?${key}=${value}`
    }
}

export default MiscUtils;