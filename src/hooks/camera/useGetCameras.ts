// ========== PACKAGES ========== \\
import {useState, useEffect} from 'react'

import axiosInstance from "../../utils/axiosInstance";


const useGetCameras = () => {
    const [cameras, setCameras] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCameras = async () => {
            try {
                const response = await axiosInstance.get('/cameras');
                setCameras(response.data);
            } catch  (error) {
                setError('Failed to fetch cameras')
            }
        };
        fetchCameras();
    }, []);

    return {cameras, error}
}

export default useGetCameras