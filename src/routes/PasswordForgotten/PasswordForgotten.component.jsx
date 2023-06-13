import {
    Confirmation,
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
            {isSubmitted ? (
                <Confirmation>Link enviado! Olhe seu email.</Confirmation>
            ) : (
                <PasswordForgottenForm>
                    <h6>logo</h6>
                    <Spacer y={8} />
                    <Text>Te enviaremos um link para resetar a sua senha.</Text>
                    <Spacer y={24} />
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
