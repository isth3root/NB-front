// ========== PACKAGES ========== \\
import { useState, useEffect } from 'react';

import axiosInstance from '../../utils/axiosInstance';


const useGetBurglarAlarmById = (id: string) => {
    const [alarm, setAlarm] = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAlarm = async () => {
            try {
                const response = await axiosInstance.get(`/burglar-alarms/${id}`);
                setAlarm(response.data);
            } catch (err) {
                setError('Failed to fetch burglar alarm');
            }
        };

        fetchAlarm();
    }, [id]);

    return { alarm, error };
};

export default useGetBurglarAlarmById;
