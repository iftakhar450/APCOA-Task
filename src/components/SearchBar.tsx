import { useEffect, useState } from "react";

interface SearchbarProps {
    onValueChange: (v: string) => void
}
export const SearchBar = ({ onValueChange }: SearchbarProps) => {
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            onValueChange(inputValue);
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [inputValue]);
    return <div className="flex p-2 w-full">
        <input type="text" onChange={(e) => setInputValue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2" placeholder="search by country name ..." />
    </div>
}