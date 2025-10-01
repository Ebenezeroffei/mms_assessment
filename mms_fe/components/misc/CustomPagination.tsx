import { Dispatch, SetStateAction } from "react"
import MiscUtils from "@/utils/misc/misc_utils"


type CustomPaginationProps = {
    defaultUrl: string,
    setUrl: Dispatch<SetStateAction<string>>,
    pagination: {
        currentPage: number,
        prev?: string,
        next?: string,
    }
}

const CustomPagination = ({
    pagination,
    defaultUrl,
    setUrl,
}: CustomPaginationProps) => {

    return (
        <section className="flex justify-end items-center gap-2 my-4">
            <div className="flex text-xs font-semibold">
                {
                    (pagination.prev && pagination.next) && (
                        <>
                            <p
                                onClick={() => setUrl(_ => MiscUtils.appendQueryString(
                                    defaultUrl,
                                    'cursor',
                                    String(pagination.prev)
                                ))}
                                className="flex items-center justify-center w-[80px] cursor-pointer h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s hover:bg-gray-100 hover:text-gray-700"
                            >
                                Previous
                            </p>
                            <p
                                onClick={() => setUrl(_ => MiscUtils.appendQueryString(
                                    defaultUrl,
                                    'cursor',
                                    String(pagination.next)
                                ))}
                                className="flex items-center justify-center w-[80px] cursor-pointer h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e hover:bg-gray-100 hover:text-gray-700"
                            >
                                Next
                            </p>
                        </>
                    )
                }
                {
                    (pagination.prev && !pagination.next) && (
                        <p
                            onClick={() => setUrl(_ => MiscUtils.appendQueryString(
                                defaultUrl,
                                'cursor',
                                String(pagination.prev)
                            ))}
                            className="flex items-center justify-center w-[80px] cursor-pointer h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-700"
                        >
                            Previous
                        </p>
                    )
                }
                {
                    (pagination.next && !pagination.prev) && (
                        <p
                            onClick={() => setUrl(_ => MiscUtils.appendQueryString(
                                defaultUrl,
                                'cursor',
                                String(pagination.next)
                            ))}
                            className="flex items-center justify-center w-[80px] cursor-pointer h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-700"
                        >
                            Next
                        </p>
                    )
                }
            </div>
        </section>
    )
}

export default CustomPagination