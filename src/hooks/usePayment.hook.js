import { getPaymentLink } from "../services/mercado-pago.service";
import { useApi } from "./useApi.hook";
import { track } from "../utils/functions/track";

export const usePayment = () => {
    const openPaymentTab = (paymentLink) => {
        window.open(paymentLink, "_blank").focus();
        track("track", "InitiateCheckout");
    };

    const [fetchGetPaymentLink] = useApi(getPaymentLink, {
        onSuccess: openPaymentTab,
    });

    return () => fetchGetPaymentLink();
};
