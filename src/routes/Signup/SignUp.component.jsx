import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    SignInLink,
    SignInText,
    SignInButton,
    SignInForm,
    SignInStyled,
    Text,
} from "./SignUp.styles";
import { Input } from "../../components/Input/Input.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { useApi } from "../../hooks/useApi.hook";
import { UserContext } from "../../contexts/user.context";
import { signUp } from "../../services/auth.service";
import { ROUTES } from "../../utils/constants";
import { useInput } from "../../hooks/useInput.hook";

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

    const [submit] = useApi(signUp, { onSuccess: onSignUp });
    const onSubmit = (event) => {
        event.preventDefault();
        submit({ name, email, password });
    };

    return (
        <SignInStyled className="page">
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
