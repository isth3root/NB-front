// ========== PACKAGES ========== \\
import { useState, useEffect } from "react";

import axiosInstance from "../../utils/axiosInstance";


const useGetBurglarAlarms = () => {
    const [alarms, setAlarms] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAlarms = async () => {
            try {
                const response = await axiosInstance.get('/burglar-alarms');
                setAlarms(response.data);
            } catch (error) {
                setError('Failed to fetch burglar alarms');
            }
        };

        fetchAlarms();
    }, []);

    return {alarms, error};
};

export default useGetBurglarAlarms