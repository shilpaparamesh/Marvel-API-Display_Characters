import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: calc(100% - 4rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
`;

export const Content = styled.div`
    max-width: calc(1140px + 3rem);
    margin: 0 auto;
    padding: 2.5rem 1.5rem;

    display: flex;
    flex-direction: column;

    font-family: 'PT Sans Caption', sans-serif;
    color: var(--dark-smoke);

    h1 {
        margin-bottom: 1rem;
    }

    strong {
        margin-bottom: 0.5rem;
    }

    @media(max-width: 720px) {
        padding: 1.5rem;
        align-items: center;

        h1 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }

        strong {
            font-size: 0.875rem;
        }
    }
`;