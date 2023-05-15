import { Outlet, useNavigate } from "react-router-dom";

import { NavbarStyled, NavbarWrapper } from "./Navbar.styles";
import { Button } from "../../components/Button/Button.component";

export const Navbar = () => {
    const navigate = useNavigate();
    const goToSignIn = () => navigate("/sign-in");
    const goToMain = () => navigate("/");

    return (
        <>
            <NavbarStyled>
                <NavbarWrapper>
                    <h6 onClick={goToMain}>logo</h6>
                    <Button variant="primary" size="small" onClick={goToSignIn}>
                        Entrar
                    </Button>
                </NavbarWrapper>
            </NavbarStyled>
            <Outlet />
        </>
    );
};
