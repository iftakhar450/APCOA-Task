import { useContext } from "react";
import { IConuntries } from "../../hooks/useContries";
import { FavCountriesContext } from "../../contexts/favCountries";
import { Card } from "../Card";

type FavCountriesProps = {
    data: IConuntries[] | undefined;
};

export const FavCountries: React.FC<FavCountriesProps> = ({ data }) => {
    const { list, removeFromFavList } = useContext(FavCountriesContext);
    // Early return if no favorite countries are selected
    if (!data) {
        return (
            <div className="flex flex-col justify-center items-center min-h-96 text-gray-300">
                Add from the list
            </div>
        );
    }

    // Filter data based on favorites
    const filterData = data && data.length && data.filter(d => list.includes(d.ccn3)) || [];
    return (
        <div className="flex flex-col gap-2 p-2">
            {filterData.map(d => (
                <Card
                    key={d.name.common}
                    country={d}
                    isFavList
                    removeFav={removeFromFavList}
                />
            ))}
        </div>
    )
}