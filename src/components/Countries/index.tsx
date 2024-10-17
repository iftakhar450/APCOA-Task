import { useContext, useEffect, useState } from "react";
import { FavCountries } from "./FavCountries";
import { useGetContries } from "../../hooks/useContries";
import AllCountries from "./AllCountries";
import { SearchBar } from "../SearchBar";

const Countries = () => {

    const [url, setUrl] = useState("https://restcountries.com/v3.1/all")
    const { isLoading, data, error } = useGetContries(url);

    if (isLoading) {
        return <>Loading....</>
    }
    if (error) {
        return <>Error: {error}</>
    }
    const handleInputChange = (value: string) => {
        if (value.length > 0) {
            setUrl(`https://restcountries.com/v3.1/name/${value}`)
        }
        if(value.length === 0 ) setUrl(`https://restcountries.com/v3.1/all`)
    }

    return (<div className="w-full h-full gap-2 flex flex-wrap overflow-auto">
        <SearchBar onValueChange={handleInputChange} />
        <div className="w-[500px] text-center">
            <h1>Other  Countries</h1>
            <AllCountries data={data} />
        </div>
        <div className="w-[200px] text-center">
            <h1>Fav  Countries</h1>
            <FavCountries data={data} />
        </div>
    </div>)
}

export default Countries;