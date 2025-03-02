import React, { createContext, useContext, useState } from "react";

const StorageContext = createContext();

export const StorageProvider = ({ children }) => {
    const [storage, setStorage] = useState({});

    const setValue = (key, value) => {
        setStorage(prevStorage => ({ ...prevStorage, [key]: value }));
    };

    const getStorage = () => storage;

    const getValue = (key) => {
        return storage[key];
    };

    return (
        <StorageContext.Provider value={{ storage, setValue, getStorage, getValue }}>
            {children}
        </StorageContext.Provider>
    );
};
export const useStorage = () => useContext(StorageContext);
