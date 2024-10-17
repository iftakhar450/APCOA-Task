import { useContext } from "react";
import { IConuntries } from "../../hooks/useContries";
import { Card } from "../Card";
import { FavCountriesContext } from "../../contexts/favCountries";



type AllCountriesProps = {
    data: IConuntries[] | undefined
}
const AllCountries = ({ data }: AllCountriesProps) => {
    const { addToFavList } = useContext(FavCountriesContext);

    if (!data)
        return <div className="flex flex-col justify-center items-center min-h-96 text-gray-300" > No record found</div>
    return (<div className="flex flex-col gap-2 p-2 ">
        {data && data.length && data.map(d => <Card key={d.name.common} country={d} markFav={addToFavList} />)}
    </div>)
}

export default AllCountries;
