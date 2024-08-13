// ========== PACKAGES ========== \\
import { useState } from "react";

import axiosInstance from "../../utils/axiosInstance";

const useDeleteCamera = () => {
    const [error, setError] = useState<string | null>(null);

    const deleteCamera = async (id: string) => {
        try {
            const response = await axiosInstance.delete(`/cameras/${id}`);
            return response.data;
        } catch (error) {
            setError('Failed to delete camera');
            return null;
        }
    };

    return {deleteCamera, error};
};

export default useDeleteCamera;