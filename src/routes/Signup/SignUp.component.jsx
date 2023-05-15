import { useState } from "react";

import { Input } from "../../components/Input/Input.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import {
    SignInLink,
    SignInText,
    SignInButton,
    SignInForm,
    SignInStyled,
    Text,
} from "./SignUp.styles";

export const SignUp = () => {
    const [name, setName] = useState("");
    const onChangeName = (event) => setName(event.target.value);
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
                <Text>Crie uma conta para começar seu teste grátis.</Text>
                <Spacer y={24} />
                <Input label="Nome" value={name} onChange={onChangeName} />
                <Spacer y={8} />
                <Input label="Email" value={email} onChange={onChangeEmail} />
                <Spacer y={4} />
                <Input
                    label="Senha"
                    value={password}
                    onChange={onChangePassword}
                />
                <Spacer y={20} />
                <SignInButton variant="primary" size="large">
                    Criar conta
                </SignInButton>
                <Spacer y={24} />
                <span>
                    <SignInText>Já tem uma conta?</SignInText>
                    <SignInLink> Entre</SignInLink>
                </span>
            </SignInForm>
        </SignInStyled>
    );
};
