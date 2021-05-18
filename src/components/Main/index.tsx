import React from 'react';
import { CharactersList } from '../MarvelCharacters';
import { PaginationOutlined } from '../Pagination';
import { Container, Content } from './styles';

export function Main() {
    return (
        <Container>
            <Content>              
                <CharactersList />
            </Content>
            <PaginationOutlined />
        </Container>
    );
}