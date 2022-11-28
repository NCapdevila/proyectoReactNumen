import axios from "axios";
import { useState } from "react";

const errorInitialState = { isError: false, message: '' };

const useDeleteData = (url, onSuccess, errorMessage) => {
    const [error, setError] = useState(errorInitialState);
    const [successDelete, setsuccessDelete] = useState(true);
    const deleteData = async (id) => {
        
        try {
            
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
            setTimeout(() => setsuccessDelete(false), 2000);
            setTimeout(() => setsuccessDelete(true), 4000);
        }
    }

    return { deleteData, successDelete, error };
}

export default useDeleteData;