import styled from 'styled-components';

export const Content = styled.div`
    max-width: calc(1140px + 3rem);
    height: 85%;
    margin: 2.5rem auto;

    display: grid;
    grid-template-columns: 3fr 2fr;

    @media(max-width: 720px) {
        height: auto;
        width: 100%;
        margin: 1rem auto;
        display: flex;
        flex-direction: column;     
    }

    font-family: 'PT Sans Caption', sans-serif;
    color: var(--dark-smoke);

    border-radius: 0.25rem;
    background: var(--white);
    box-shadow: 0px 0px 5px var(--shadow);

    > div {
        overflow: hidden;
        position: relative;
        border-radius: 0.25rem 0 0 0.25rem;

        @media(max-width: 720px) {
            border-radius: 0.25rem 0.25rem 0 0;       
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;

            @media(max-width: 720px) {
                width: 100%;
                height: auto;
            }
        }

        h1 {
            display: flex;
            align-items: center;
            gap: 2rem;
            padding: 0 2rem 0 1rem;
            background: rgba(0, 0, 0, 0.7);
            color: var(--white);
            position: absolute;
            top: 1.5rem;
            left: 0;

            @media(max-width: 720px) {
                font-size: 1.5rem;
                padding: 0;
                top: 0;
                width: 100%;
                height: 2.5rem;
            }

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                width: 3rem;
                
                img {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    
                    height: 4rem;
                    filter: brightness(0) invert(1);
                    transition: height 0.2s;

                    &:hover {
                        height: 5rem;
                    }
                }
            }
        }

        &:first-child::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 80%;
            right: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--white) 100%);

            @media(max-width: 720px) {
                top: 80%;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(rgba(255, 255, 255, 0) 0%, var(--white) 100%);       
            }
        }

        &:last-child {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            
            > div {

                & + div {
                    margin-top: 0.5rem;
                }

            strong {
                display: inline-block;
                color: var(--smoke);
                
            }

            p {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;

                span {
                    font-size: 0.875rem;
                    line-height: 0.9rem;
                    }
                }
            }
        }
            
    }
    
`;