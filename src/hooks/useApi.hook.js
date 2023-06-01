import { useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

export const useApi = (service, config = {}) => {
    // Need user token to fetch endpoints that require authorization
    const userToken = useContext(UserContext)?.userToken;

    // Default values
    const initialData = config.initialData || null;
    const onSuccess = config.onSuccess || (() => {});
    const onError = config.onError || (() => {});

    // States
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch function
    const fetchData = async (...args) => {
        try {
            setLoading(true);
            const resData = await service(...args, userToken);
            setData(resData);
            onSuccess(resData);
        } catch (error) {
            setError(error);
            onError(error);
        } finally {
            setLoading(false);
        }
    };

    // Return
    return [fetchData, data, loading, error];
};
