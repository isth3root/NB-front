// ========== PACKAGES ========== \\
import { useState } from "react";

import axiosInstance from "../../utils/axiosInstance";

interface ICamera {
    brand: string;
    model: string;
}

const useCreateCamera = () => {
    const [error, setError] = useState<string | null>(null);

    const createCamera = async (camera: ICamera) => {
        try {
            const response = await axiosInstance.post('/cameras', camera);
            return response.data;
        } catch (error) {
            setError('Faild to create camera');
            return null;
        }
    };
    return {createCamera, error}
};

export default useCreateCamera