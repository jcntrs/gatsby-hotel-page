import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const NavLing = styled(Link)`
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }

    &.current-page {
        border-bottom: 2px solid #fff;
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <NavLing to="/" activeClassName="current-page">Inicio</NavLing>
            <NavLing to="/nosotros" activeClassName="current-page">Nosotros</NavLing>
        </Nav>
    );
}

export default Navigation;