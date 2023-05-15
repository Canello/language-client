import { useState } from "react";

import { Input } from "../../components/Input/Input.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import {
    ForgetPassword,
    SignUpLink,
    SignUpText,
    SignInButton,
    SignInForm,
    SignInStyled,
    Text,
} from "./SignIn.styles";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const onChangeEmail = (event) => setEmail(event.target.value);
    const [password, setPassword] = useState("");
    const onChangePassword = (event) => setPassword(event.target.value);

    return (
        <SignInStyled>
            <SignInForm>
                <Spacer y={32} />
                <h6>logo</h6>
                <Spacer y={8} />
                <Text>Entre para começar seu teste grátis.</Text>
                <Spacer y={24} />
                <Input label="Email" value={email} onChange={onChangeEmail} />
                <Spacer y={4} />
                <Input
                    label="Senha"
                    value={password}
                    onChange={onChangePassword}
                />
                <Spacer y={20} />
                <SignInButton variant="primary" size="large">
                    Entrar
                </SignInButton>
                <Spacer y={24} />
                <ForgetPassword>Esqueceu a senha?</ForgetPassword>
                <Spacer y={16} />
                <span>
                    <SignUpText>Não tem uma conta?</SignUpText>
                    <SignUpLink> Cadastre-se</SignUpLink>
                </span>
            </SignInForm>
        </SignInStyled>
    );
};
