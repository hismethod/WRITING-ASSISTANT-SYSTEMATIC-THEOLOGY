import React, { useContext, createContext } from "react";
import { useLocalStore } from 'mobx-react-lite';

const AppStore = () => {
    return {
        viewMode: 'list',
        toggleViewMode() {
            if (this.viewMode === 'list') {
                this.viewMode = 'single';
            } else {
                this.viewMode = 'list';
            }
        },
        get currentViewMode() {
            return this.viewMode;
        }
    }
}

const storeContext = createContext(AppStore());

export const StoreProvider = ({ children }) => {
    const store = useLocalStore(AppStore);
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useAppStore = () => {
    const store = useContext(storeContext);
    if (!store) {
        throw new Error('You have forgot to use StoreProvider, shame on you.')
    }
    return store
}