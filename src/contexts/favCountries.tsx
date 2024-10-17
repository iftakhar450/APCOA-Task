import { createContext, ReactNode, useContext, useState } from "react";

export type UserContextType = {
    list: string[];
    addToFavList: (ccn3: string) => void
    removeFromFavList: (ccn3: string) => void

}
const initialContext = {
    list: [],
    addToFavList: () => { },
    removeFromFavList: () => { }
}
export const FavCountriesContext = createContext<UserContextType>(initialContext);
const FavCountriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [list, setList] = useState<string[]>([])
    const addToFavList = (c: string) => {
        if (c.trim() && !list.includes(c)) {
            setList([...list, c]);
        }
    }
    const removeFromFavList = (c: string) => {
        const filteredList = list.filter((i) => i !== c);
        setList([...filteredList]);
    }
    return <FavCountriesContext.Provider value={{ list, addToFavList, removeFromFavList }}> {children}</FavCountriesContext.Provider>
}

export default FavCountriesProvider;