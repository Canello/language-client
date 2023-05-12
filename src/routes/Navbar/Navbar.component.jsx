import { Outlet } from "react-router-dom";

import { NavbarStyled, NavbarWrapper } from "./Navbar.styles";
import { Button } from "../../components/Button/Button.component";

export const Navbar = () => {
    return (
        <>
            <NavbarStyled>
                <NavbarWrapper>
                    <h6>logo</h6>
                    <Button variant="primary" size="small">
                        Entrar
                    </Button>
                </NavbarWrapper>
            </NavbarStyled>
            <Outlet />
        </>
    );
};
