import { CustomError } from "../utils/classes/CustomError";
import { API_ADDRESS } from "../utils/constants";

export const getPaymentLink = async (userToken: string) => {
    const res = await fetch(API_ADDRESS + "/mercado-pago/preferences", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + userToken,
        },
    });
    const resJson = await res.json();
    if (resJson.error) throw new CustomError(resJson.error);

    return resJson.data.init_point;
};
