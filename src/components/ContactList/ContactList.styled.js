import styled from 'styled-components'

export const Button = styled.button`
        align-items: center;
        margin: 10px 30px;
        padding: 10px 30px;
        border-radius: 4px;
        background-color: yellow;
        border: none;

        transition: all 300ms ease-in-out;

        &:hover {
            transform: scale(1.03);
            background-color: #09f;
        }
`;