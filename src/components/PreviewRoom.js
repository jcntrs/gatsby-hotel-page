import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #fb8c00;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;

    &:hover {
        background-color: #ffa725;
    }
`;

const PreviewRoom = ({ room }) => {
    return (
        <div css={css`border: 1px solid #e1e1e1; margin-bottom: 2rem;`}>
            <Image fluid={room.image.fluid} />
            <div css={css`padding: 3rem;`}>
                <h3 css={css`font-size: 3rem;`}>{room.title}</h3>
                <p>{room.content}</p>
                <Button to={room.slug}>Ver Habitación</Button>
            </div>
        </div>
    );
}

export default PreviewRoom;