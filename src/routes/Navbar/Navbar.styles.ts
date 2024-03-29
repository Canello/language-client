import styled from "styled-components";

export const NavbarStyled = styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    height: var(--navbar-height);
    width: 100vw;
    padding: 0 32px;
    background-color: #f9f4e930;
    backdrop-filter: blur(5px);
    border-bottom: 1px solid #e4e0d7;
    z-index: 9;
`;

export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    max-width: 1000px;
`;

export const LogoContainer = styled.figure`
    display: flex;
    align-items: flex-end;
    padding: 4px 4px;
    border-radius: 4px;
    background-color: #1f324650;
    backdrop-filter: blur(5px);

    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }
`;

export const LogoText = styled.figcaption`
    font-size: 14px;
    font-weight: 500;
    color: var(--grey-color-white);
    font-family: var(--logo-font);
`;

export const LogoStyled = styled.img`
    width: 32px;
`;

export const ProfileLink = styled.a`
    font-size: 14px;
    font-weight: 700;
    color: var(--neutral-color-1);

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
