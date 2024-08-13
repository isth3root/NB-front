// ========== PACKAGES ========== \\
import { useState } from 'react';

import axiosInstance from '../../utils/axiosInstance';


const useDeleteBurglarAlarm = () => {
    const [error, setError] = useState<string | null>(null);

    const deleteBurglarAlarm = async (id: string) => {
        try {
            const response = await axiosInstance.delete(`/burglar-alarms/${id}`);
            return response.data;
        } catch (err) {
            setError('Failed to delete burglar alarm');
            return null;
        }
    };

    return { deleteBurglarAlarm, error };
};

export default useDeleteBurglarAlarm;
