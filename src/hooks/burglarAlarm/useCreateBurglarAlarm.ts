// ========== PACKAGES ========== \\
import { useState } from "react";

import axiosInstance from "../../utils/axiosInstance";

interface IBurglarAlarm {
    brand: string;
    model: string;
}

const useCreateBurglarAlarm = () => {
    const [error, setError] = useState<string | null>(null);

    const createBurglarAlarm = async (alarm: IBurglarAlarm) => {
        try {
            const response = await axiosInstance.post('/burglar-alarms', alarm);
            return response.data;
        } catch (err) {
            setError('Failed to create burglar alarm');
            return null;
        }
    };

    return { createBurglarAlarm, error };
};

export default useCreateBurglarAlarm;