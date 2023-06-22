import { getPaymentLink } from "../services/mercado-pago.service";
import { useApi } from "./useApi.hook";

export const usePayment = () => {
    const openPaymentTab = (paymentLink) =>
        window.open(paymentLink, "_blank").focus();

    const [fetchGetPaymentLink] = useApi(getPaymentLink, {
        onSuccess: openPaymentTab,
    });

    return () => fetchGetPaymentLink();
};
