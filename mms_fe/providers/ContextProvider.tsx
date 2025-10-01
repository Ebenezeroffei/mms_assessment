'use client';

import { useContext, createContext, PropsWithChildren, useState, Dispatch, SetStateAction, ReactNode } from "react"

export type ContextValuesType = {
    modalTitle: string | undefined,
    setModalTitle: Dispatch<SetStateAction<string | undefined>>,
    modalContent: ReactNode | undefined,
    setModalContent: Dispatch<SetStateAction<ReactNode | undefined>>,
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
}
const AppContext = createContext<ContextValuesType | null>(null);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [modalTitle, setModalTitle] = useState<string>();
    const [modalContent, setModalContent] = useState<ReactNode>();
    const [showModal, setShowModal] = useState(false);

    const contextValue: ContextValuesType = {
        modalTitle,
        setModalTitle,
        modalContent,
        setModalContent,
        showModal,
        setShowModal,
    };

    return (
        <AppContext.Provider
            value={contextValue}
        >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    const appContext = useContext(AppContext) as ContextValuesType;
    return appContext;
};

export default ContextProvider;
export { useAppContext }