import styled from "styled-components";

export const NavbarStyled = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    height: 52px;
    width: 100vw;
    padding: 0 32px;
    background-color: #f9f4e930;
    backdrop-filter: blur(5px);
    border-bottom: 1px solid #e4e0d7;
`;

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    max-width: 720px;
`;
