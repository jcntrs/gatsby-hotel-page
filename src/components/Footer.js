import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const HomeLink = styled(Link)`
    color: #fff; 
    text-align: center;
    text-decoration: none;
`;

const Footer = ({ siteName }) => (
    <>
        <footer css={css`background-color: #1b2e41; margin-top: 5rem; padding: 1rem;`}>
            <div css={css`
                    max-width: 1200px; 
                    margin: 0 auto;
                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `}>
                <HomeLink to="/"><h1>{siteName}</h1></HomeLink>
            </div>
            <p css={css`
                text-align: center;
                color: #fff;
                margin: 0;
                padding: 1rem;
            `}>
                Copyright &copy; 2020<b css={css`color: #2196f3;`}> Jean C. Contreras</b>. Todos los derechos Reservados.
            </p>
        </footer>
    </>
);


export default Footer;