import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { useApi } from "../../hooks/useApi.hook";
import { UserContext } from "../../contexts/user.context";
import { signUp } from "../../services/signup.service";

export const SignUp = () => {
    const [name, setName] = useState("");
    const onChangeName = (event) => setName(event.target.value);
    const [email, setEmail] = useState("");
    const onChangeEmail = (event) => setEmail(event.target.value);
    const [password, setPassword] = useState("");
    const onChangePassword = (event) => setPassword(event.target.value);

    const [submit, data, isLoading, error] = useApi(signUp);
    const onSubmit = (event) => {
        event.preventDefault();
        submit({ name, email, password });
    };

    const { setUser, setUserToken } = useContext(UserContext);

    const navigate = useNavigate();
    const goToMain = () => navigate("/");
    const goToSignIn = () => navigate("/sign-in");

    useEffect(() => {
        if (!data) return;
        const { user, token } = data;
        if (user) setUser(user);
        if (token) setUserToken(token);
        console.log(data);
        goToMain();
    }, [data]);

    return (
        <SignInStyled>
            <SignInForm>
                <Spacer y={32} />
                <h6>logo</h6>
                <Spacer y={8} />
                <Text>Crie uma conta para começar seu teste grátis.</Text>
                <Spacer y={24} />
                <Input label="Nome" value={name} onChange={onChangeName} />
                <Spacer y={4} />
                <Input label="Email" value={email} onChange={onChangeEmail} />
                <Spacer y={4} />
                <Input
                    label="Senha"
                    value={password}
                    onChange={onChangePassword}
                    type="password"
                />
                <Spacer y={20} />
                <SignInButton variant="primary" size="large" onClick={onSubmit}>
                    Criar conta
                </SignInButton>
                <Spacer y={24} />
                <span>
                    <SignInText>Já tem uma conta?</SignInText>
                    <SignInLink onClick={goToSignIn}> Entre</SignInLink>
                </span>
            </SignInForm>
        </SignInStyled>
    );
};
