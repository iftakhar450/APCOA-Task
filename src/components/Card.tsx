
import { IConuntries } from '../hooks/useContries'

interface CardProps {
    country: IConuntries
    markFav?: (c: string) => void
    removeFav?: (c: string) => void
    isFavList?: boolean;
}
export const Card = ({ country, markFav, removeFav, isFavList = false }: CardProps) => {
    return (<div className=' flex justify-between item-center p-2 gap-2 rounded' style={{ backgroundColor: "#d3d3d3" }}>
        <span >
            {country.name.common}
        </span>

        {!isFavList && <button className='bg-green-500 p-2 rounded' onClick={() => markFav && markFav(country.ccn3)}>+</button>}
        {isFavList && <button className='bg-red-500 p-2 rounded' onClick={() => removeFav && removeFav(country.ccn3)}>-</button>}
    </div>)
}