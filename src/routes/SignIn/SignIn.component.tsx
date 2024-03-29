import React, { MouseEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ForgetPassword,
    SignUpLink,
    SignUpText,
    SignInButton,
    SignInForm,
    SignInStyled,
    Text,
    AlertText,
    LogoStyled,
    LogoContainer,
    LogoText,
} from "./SignIn.styles";
import { Input } from "../../components/Input/Input.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { useInput } from "../../hooks/useInput.hook";
import { useApi } from "../../hooks/useApi.hook";
import { signIn } from "../../services/auth.service";
import { UserContext } from "../../contexts/user.context";
import { ROUTES } from "../../utils/constants";
import { Loading } from "../../components/Loading/Loading.component";
import Logo from "../../assets/logo-secondary-2.svg";
import { CustomError } from "../../utils/classes/CustomError";

export const SignIn: React.FC = () => {
    const { setUser, setUserToken } = useContext(UserContext);

    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();

    const navigate = useNavigate();
    const goToMain = () => navigate(ROUTES.main);
    const goToSignUp = () => navigate(ROUTES.signUp);
    const goToPasswordForgotten = () => navigate(ROUTES.passwordForgotten);

    const onSignIn = (data: any) => {
        const { user, token } = data;
        if (user) setUser(user);
        if (token) setUserToken(token);
        goToMain();
    };

    const [inputError, setInputError] = useState<string>("");
    const handleError = (error: CustomError) => {
        if (error.type === "invalid_input") setInputError(error.message);
    };

    const [submit, data, isLoading] = useApi(signIn, {
        onSuccess: onSignIn,
        onError: handleError,
    });
    const onSubmit: MouseEventHandler = (event) => {
        event.preventDefault();
        submit({ email, password });
    };

    return (
        <SignInStyled className="page" data-testid="SignInStyled">
            <SignInForm>
                <Spacer y={32} />
                <LogoContainer>
                    <LogoStyled src={Logo} />
                    <Spacer y={8} />
                    <LogoText>caitlyn</LogoText>
                </LogoContainer>
                <Spacer y={16} />
                <Text>Entre para começar seu teste grátis.</Text>
                <Spacer y={32} />
                <Input label="Email" value={email} onChange={onChangeEmail} />
                <Spacer y={4} />
                <Input
                    label="Senha"
                    value={password}
                    onChange={onChangePassword}
                    type="password"
                />
                <Spacer y={20} />
                {isLoading ? (
                    <>
                        <Loading />
                        <Spacer y={20} />
                    </>
                ) : null}
                {inputError ? (
                    <>
                        <AlertText>{inputError}</AlertText>
                        <Spacer y={20} />
                    </>
                ) : null}
                <SignInButton variant="primary" size="large" onClick={onSubmit}>
                    Entrar
                </SignInButton>
                <Spacer y={24} />
                <ForgetPassword onClick={goToPasswordForgotten}>
                    Esqueceu a senha?
                </ForgetPassword>
                <Spacer y={16} />
                <span>
                    <SignUpText>Não tem uma conta?</SignUpText>
                    <SignUpLink onClick={goToSignUp}> Cadastre-se</SignUpLink>
                </span>
            </SignInForm>
        </SignInStyled>
    );
};
