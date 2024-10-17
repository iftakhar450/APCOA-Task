import { useContext } from "react";
import { IConuntries } from "../../hooks/useContries";
import { Card } from "../Card";
import { FavCountriesContext } from "../../contexts/favCountries";



type AllCountriesProps = {
    data: IConuntries[] | undefined;
};

const AllCountries: React.FC<AllCountriesProps> = ({ data }) => {
    const { addToFavList } = useContext(FavCountriesContext);
    // Early return for no data
    if (!data || data.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center min-h-96 text-gray-300">
                No records found
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2 p-2">
            {data.map(country => (
                <Card
                    key={country.name.common}
                    country={country}
                    markFav={addToFavList}
                />
            ))}
        </div>
    );
};

export default AllCountries;
