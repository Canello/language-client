import { Outlet, useNavigate } from "react-router-dom";

import { NavbarStyled, NavbarWrapper, ProfileLink } from "./Navbar.styles";
import { Button } from "../../components/Button/Button.component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { ROUTES } from "../../utils/constants";

export const Navbar = () => {
    const { user } = useContext(UserContext);

    const navigate = useNavigate();
    const goToSignIn = () => navigate(ROUTES.signIn);
    const goToMain = () => navigate(ROUTES.main);
    const goToProfile = () => navigate(ROUTES.profile);

    return (
        <>
            <NavbarStyled>
                <NavbarWrapper>
                    <h6 onClick={goToMain}>logo</h6>
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
        </>
    );
};
