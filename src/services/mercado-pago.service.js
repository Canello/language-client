import { API_ADDRESS } from "../utils/constants";

export const getPaymentLink = async (userToken) => {
    let res = await fetch(API_ADDRESS + "/mercado-pago/preferences", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + userToken,
        },
    });
    res = await res.json();

    return res.data.init_point;
};
