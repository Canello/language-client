import {
    Confirmation,
    LogoContainer,
    LogoStyled,
    LogoText,
    PasswordForgottenButton,
    PasswordForgottenForm,
    PasswordForgottenStyled,
    Text,
} from "./PasswordForgotten.styles";
import { useInput } from "../../hooks/useInput.hook";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { useState } from "react";
import { Input } from "../../components/Input/Input.component";
import { useApi } from "../../hooks/useApi.hook";
import { requestPasswordResetLink } from "../../services/auth.service";
import Logo from "../../assets/logo-secondary-2.svg";

export const PasswordForgotten = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, onChangeEmail] = useInput();

    const [fetchRequestPasswordResetLink] = useApi(requestPasswordResetLink);

    const onSubmit = (event) => {
        event.preventDefault();
        if (!email) return;
        fetchRequestPasswordResetLink(email);
        setIsSubmitted(true);
    };

    return (
        <PasswordForgottenStyled className="page">
            <Spacer y={32} />
            <LogoContainer>
                <LogoStyled src={Logo} />
                <Spacer y={8} />
                <LogoText>caitlyn</LogoText>
            </LogoContainer>
            <Spacer y={16} />
            {isSubmitted ? (
                <Confirmation>Link enviado! Olhe seu email.</Confirmation>
            ) : (
                <PasswordForgottenForm>
                    <Text>Te enviaremos um link para resetar a sua senha.</Text>
                    <Spacer y={32} />
                    <Input
                        label="Email"
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <Spacer y={20} />
                    <PasswordForgottenButton
                        variant="primary"
                        size="large"
                        onClick={onSubmit}
                    >
                        Enviar link
                    </PasswordForgottenButton>
                </PasswordForgottenForm>
            )}
        </PasswordForgottenStyled>
    );
};
