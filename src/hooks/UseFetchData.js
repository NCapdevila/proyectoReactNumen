import axios from "axios";
import { useEffect, useState } from "react";

const errorInitialState = {IsError: false, message: ''};

const useFetchData= (url, refetch) =>{
    const [error, setError] = useState(errorInitialState);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() =>{
        const FetchData = async () =>{
            try{
                setIsLoading(true);
                setError(errorInitialState);
                const res = await axios({
                    method: 'get',
                    url: url,
                })
                setData(res.data);
            }
            catch(e){
                setError({
                    IsError: true,
                    message: e?.message ||'Hubo un error al traer los datos',
                })
            } finally {
                setTimeout(() => setIsLoading(false), 1000)
            }
        }
        FetchData();
    }, [refetch, url])

    return {data, isLoading, error};
}

export default useFetchData;