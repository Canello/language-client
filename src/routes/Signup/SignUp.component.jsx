import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    SignInLink,
    SignInText,
    SignInButton,
    SignInForm,
    SignInStyled,
    Text,
    AlertText,
    LogoStyled,
    LogoContainer,
    LogoText,
} from "./SignUp.styles";
import { Input } from "../../components/Input/Input.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { useApi } from "../../hooks/useApi.hook";
import { UserContext } from "../../contexts/user.context";
import { signUp } from "../../services/auth.service";
import { ROUTES } from "../../utils/constants";
import { useInput } from "../../hooks/useInput.hook";
import { Loading } from "../../components/Loading/Loading.component";
import Logo from "../../assets/logo-secondary-2.svg";

export const SignUp = () => {
    const { setUser, setUserToken } = useContext(UserContext);

    const [name, onChangeName] = useInput();
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();

    const navigate = useNavigate();
    const goToMain = () => navigate(ROUTES.main);
    const goToSignIn = () => navigate(ROUTES.signIn);

    const onSignUp = (data) => {
        const { user, token } = data;
        if (user) setUser(user);
        if (token) setUserToken(token);
        goToMain();
    };

    const [inputError, setInputError] = useState(false);
    const handleError = (error) => {
        if (error.type === "invalid_input") setInputError(error.message);
    };

    const [submit, data, isLoading] = useApi(signUp, {
        onSuccess: onSignUp,
        onError: handleError,
    });
    const onSubmit = (event) => {
        event.preventDefault();
        submit({ name, email, password });
    };

    return (
        <SignInStyled className="page">
            <SignInForm>
                <Spacer y={32} />
                <LogoContainer>
                    <LogoStyled src={Logo} />
                    <Spacer y={8} />
                    <LogoText>caitlyn</LogoText>
                </LogoContainer>
                <Spacer y={16} />
                <Text>Crie uma conta para começar seu teste grátis.</Text>
                <Spacer y={32} />
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
