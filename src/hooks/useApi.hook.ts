import { useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

interface IConfig {
    initialData?: any;
    onSuccess?: Function;
    onError?: Function;
}

export const useApi = (service: Function, config: IConfig = {}) => {
    // Need user token to fetch endpoints that require authorization
    const userToken = useContext(UserContext)?.userToken;

    // Default values
    const initialData = config.initialData || null;
    const onSuccess = config.onSuccess || (() => {});
    const onError = config.onError || (() => {});

    // States
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    // Fetch function
    const fetchData = async (...args: Array<any>) => {
        try {
            setLoading(true);
            const resData = await service(...args, userToken);
            setData(resData);
            onSuccess(resData);
        } catch (error: any) {
            setError(error);
            onError(error);
        } finally {
            setLoading(false);
        }
    };

    // Return
    return [fetchData, data, loading, error];
};
