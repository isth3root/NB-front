// ========== PACKAGES ========== \\
import { useState, useEffect } from "react";

import axiosInstance from "../../utils/axiosInstance";


const useGetSingleCamera = (id: string) => {
    const [camera, setCamera]  = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCamera = async () => {
            try {
                const response = await axiosInstance.get(`/cameras/${id}`);
                setCamera(response.data);
            } catch (error) {
                setError('Failed to fetch camera');
            }
        };

        fetchCamera();
    }, [id]);

    return {camera, error};
};

export default useGetSingleCamera