import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { useApi } from "../../hooks/useApi.hook";
import { signIn } from "../../services/signin.service";
import { UserContext } from "../../contexts/user.context";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const onChangeEmail = (event) => setEmail(event.target.value);
    const [password, setPassword] = useState("");
    const onChangePassword = (event) => setPassword(event.target.value);

    const [submit, data, isLoading, error] = useApi(signIn);
    const onSubmit = (event) => {
        event.preventDefault();
        submit({ email, password });
    };

    const { setUser, setUserToken } = useContext(UserContext);

    const navigate = useNavigate();
    const goToMain = () => navigate("/");
    const goToSignUp = () => navigate("/sign-up");

    useEffect(() => {
        if (!data) return;
        const { user, token } = data;
        if (user) setUser(user);
        if (token) setUserToken(token);
        goToMain();
    }, [data]);

    return (
        <SignInStyled>
            <SignInForm>
                <Spacer y={32} />
                <h6 onClick={goToMain}>logo</h6>
                <Spacer y={8} />
                <Text>Entre para começar seu teste grátis.</Text>
                <Spacer y={24} />
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
                    Entrar
                </SignInButton>
                <Spacer y={24} />
                <ForgetPassword>Esqueceu a senha?</ForgetPassword>
                <Spacer y={16} />
                <span>
                    <SignUpText>Não tem uma conta?</SignUpText>
                    <SignUpLink onClick={goToSignUp}> Cadastre-se</SignUpLink>
                </span>
            </SignInForm>
        </SignInStyled>
    );
};
