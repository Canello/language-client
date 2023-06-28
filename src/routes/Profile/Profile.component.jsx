import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Logout, ProfileStyled, RenewalText, Text } from "./Profile.styles";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { UserContext } from "../../contexts/user.context";
import { Button } from "../../components/Button/Button.component";
import { ROUTES } from "../../utils/constants";
import { formatDate } from "../../utils/functions/formatDate";
import { usePayment } from "../../hooks/usePayment.hook";

export const Profile = () => {
    const { user, logout } = useContext(UserContext);
    const openPayment = usePayment();

    const navigate = useNavigate();
    const goToMain = () => navigate(ROUTES.main);

    const onLogout = () => {
        logout();
        goToMain();
    };

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
                        {"Assinatura válida até " + formatDate(user?.expiresAt)}
                    </Text>
                </>
            ) : null}
            <Spacer y={16} />
            <Logout onClick={onLogout}>Sair</Logout>
            {user.isActive ? null : (
                <>
                    <Spacer y={32} />
                    <Button variant="primary" onClick={openPayment}>
                        Assinar por R$19,99
                    </Button>
                    <Spacer y={4} />
                    <RenewalText>
                        <b>Não renova</b> automaticamente, pode ficar tranquilo.
                    </RenewalText>
                </>
            )}
        </ProfileStyled>
    );
};
