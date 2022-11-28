import axios from "axios";
import { useState } from "react";

const errorInitialState = { isError: false, message: '' };

const useDeleteData = (url, onSuccess, errorMessage) => {
    const [error, setError] = useState(errorInitialState);
    const [isLoading, setIsLoading] = useState(false);
    const deleteData = async (id) => {
        
        try {
            
            setIsLoading(true);
            setError(errorInitialState);
            const res = await axios({
                method: 'delete',
                url: `${url}/${id}`,
                
            })
            if (res.status === 200) {
                setTimeout(() => onSuccess(), 1000);
            }
        } catch (e) {
            setError({
                isError: true,
                message: e?.message || errorMessage,
            })
        } finally {
            setTimeout(() => setIsLoading(false), 5000);
        }
    }

    return { deleteData, isLoading, error };
}

export default useDeleteData;