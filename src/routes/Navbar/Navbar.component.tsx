import { Outlet, useNavigate } from "react-router-dom";
import {
    LogoContainer,
    LogoStyled,
    LogoText,
    NavbarStyled,
    NavbarWrapper,
    ProfileLink,
} from "./Navbar.styles";
import { Button } from "../../components/Button/Button.component";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { ROUTES } from "../../utils/constants";
import { Footer } from "../../components/Footer/Footer.component";
import Logo from "../../assets/logo-white.svg";
import { Spacer } from "../../components/Spacer/Spacer.component";

export const Navbar: React.FC = () => {
    const { user } = useContext(UserContext);

    const navigate = useNavigate();
    const goToSignIn = () => navigate(ROUTES.signIn);
    const goToMain = () => navigate(ROUTES.main);
    const goToProfile = () => navigate(ROUTES.profile);

    return (
        <>
            <NavbarStyled data-testid="NavbarStyled">
                <NavbarWrapper>
                    <LogoContainer onClick={goToMain}>
                        <LogoStyled src={Logo} />
                        {/* <Spacer x={4} />
                        <LogoText>caitlyn</LogoText> */}
                    </LogoContainer>
                    {user ? (
                        <ProfileLink onClick={goToProfile}>
                            Minha conta
                        </ProfileLink>
                    ) : (
                        <Button
                            variant="primary"
                            size="small"
                            onClick={goToSignIn}
                        >
                            Entrar
                        </Button>
                    )}
                </NavbarWrapper>
            </NavbarStyled>
            <Outlet />
            <Footer />
        </>
    );
};
