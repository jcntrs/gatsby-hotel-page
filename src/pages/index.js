import React from "react"
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import HotelImage from '../components/HotelImage';
import InitialContent from '../components/InitialContent';
import PreviewRoom from '../components/PreviewRoom';
import useRooms from '../hooks/useRooms';

const RoomList = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3rem;
    }
`;

const IndexPage = () => {
    const rooms = useRooms();
    console.log(rooms)

    return (
        <Layout>
            <HotelImage />
            <InitialContent />
            <h2 css={css`
                text-align: center; 
                margin-top: 5rem !important; 
                font-size: 3rem`
            }>
                Nuestras Habitaciones
            </h2>
            <RoomList>
                {rooms.map(room => <PreviewRoom key={room.id} room={room} />)}
            </RoomList>
        </Layout>
    )
}

export default IndexPage
