import { useLocation, useNavigate } from "react-router-dom";
import {
    ResetPasswordButton,
    ResetPasswordForm,
    ResetPasswordStyled,
    Text,
} from "./ResetPassword.styles";
import { Input } from "../../components/Input/Input.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { useInput } from "../../hooks/useInput.hook";
import { ROUTES } from "../../utils/constants";
import { useApi } from "../../hooks/useApi.hook";
import { changePassword } from "../../services/auth.service";

export const ResetPassword = () => {
    const [newPassword, onChangeNewPassword] = useInput();
    const [fetchChangePassword] = useApi(changePassword);

    const location = useLocation();
    const resetToken =
        location.pathname.split("/")[location.pathname.split("/").length - 1];

    const navigate = useNavigate();
    const goToSignIn = () => navigate(ROUTES.signIn);

    const onSubmit = (event) => {
        event.preventDefault();
        fetchChangePassword(resetToken, newPassword);
        goToSignIn();
    };

    return (
        <ResetPasswordStyled className="page">
            <ResetPasswordForm>
                <Spacer y={32} />
                <h6>logo</h6>
                <Spacer y={8} />
                <Text>Insira sua nova senha.</Text>
                <Spacer y={24} />
                <Input
                    label="Nova senha"
                    type="password"
                    value={newPassword}
                    onChange={onChangeNewPassword}
                />
                <Spacer y={20} />
                <ResetPasswordButton
                    variant="primary"
                    size="large"
                    onClick={onSubmit}
                >
                    Redefinir senha
                </ResetPasswordButton>
            </ResetPasswordForm>
        </ResetPasswordStyled>
    );
};
