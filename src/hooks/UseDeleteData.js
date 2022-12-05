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
                onSuccess();
            }
        } catch (e) {
            setError({
                isError: true,
                message: e?.message || errorMessage,
            })
        } finally {
            setsuccessDelete(false);
            setTimeout(() => setsuccessDelete(true), 2000);
        }
    }

    return { deleteData, successDelete, error };
}

export default useDeleteData;