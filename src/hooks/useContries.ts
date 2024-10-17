import { useEffect, useState } from "react"

interface ICountryName {
    common: string;
}
export interface IConuntries {
    flag: string;
    name: ICountryName
    ccn3: string
}
export const useGetContries = (url: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<IConuntries[] | undefined>(undefined)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                const { status } = res;
                if (status == 404) {
                    setData(undefined)
                } else {
                    setData(res)
                }

            })
            .catch(err => {
                setError(err)
            })
            .finally(() => setIsLoading(false))
    }, [url]);
    return { isLoading, data, error };

}