import { useContext } from "react";
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
import { useInput } from "../../hooks/useInput.hook";
import { useApi } from "../../hooks/useApi.hook";
import { signIn } from "../../services/auth.service";
import { UserContext } from "../../contexts/user.context";
import { ROUTES } from "../../utils/constants";

export const SignIn = () => {
    const { setUser, setUserToken } = useContext(UserContext);

    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();

    const navigate = useNavigate();
    const goToMain = () => navigate(ROUTES.main);
    const goToSignUp = () => navigate(ROUTES.signUp);
    const goToPasswordForgotten = () => navigate(ROUTES.passwordForgotten);

    const onSignIn = (data) => {
        const { user, token } = data;
        if (user) setUser(user);
        if (token) setUserToken(token);
        goToMain();
    };

    const [submit] = useApi(signIn, { onSuccess: onSignIn });
    const onSubmit = (event) => {
        event.preventDefault();
        submit({ email, password });
    };

    return (
        <SignInStyled className="page">
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
                    type="password"
                />
                <Spacer y={20} />
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
