import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Logout, ProfileStyled, Text } from "./Profile.styles";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { UserContext } from "../../contexts/user.context";
import { Button } from "../../components/Button/Button.component";
import { ROUTES } from "../../utils/constants";
import { formatDate } from "../../utils/functions/formatDate";
import { useApi } from "../../hooks/useApi.hook";
import { getPaymentLink } from "../../services/mercado-pago.service";

export const Profile = () => {
    const { user, logout } = useContext(UserContext);

    const navigate = useNavigate();
    const goToMain = () => navigate(ROUTES.main);

    const onLogout = () => {
        logout();
        goToMain();
    };

    const openPaymentTab = (paymentLink) =>
        window.open(paymentLink, "_blank").focus();

    const [fetchGetPaymentLink] = useApi(getPaymentLink, {
        onSuccess: openPaymentTab,
    });

    if (!user) return null;
    return (
        <ProfileStyled className="page">
            <Spacer y={32} />
            <Text>{user?.fullName}</Text>
            <Spacer y={4} />
            <Text>{user?.email}</Text>
            {user?.isActive ? (
                <>
                    <Spacer y={4} />
                    <Text>
                        {"Assinatura válida até " +
                            formatDate(user?.expirationDate)}
                    </Text>
                </>
            ) : (
                <>
                    <Spacer y={16} />
                    <Button
                        variant="primary"
                        onClick={() => fetchGetPaymentLink()}
                    >
                        Comprar um mês de acesso
                    </Button>
                </>
            )}
            <Spacer y={16} />
            <Logout onClick={onLogout}>Sair</Logout>
        </ProfileStyled>
    );
};
