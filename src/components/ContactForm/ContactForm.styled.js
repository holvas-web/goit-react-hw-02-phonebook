import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #757575;
    border-radius: 6px;
    padding: 30px 20px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-left: auto;

    font-family: 'Roboto', 'Oxygen', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.11;
    letter-spacing: 0.72px;
    color: #dedede;
`;

export const Input = styled.input`
    appearance: none;
    border: none;
    outline: none;
    border-bottom: 3px solid #757575;
    background-color: #0000;
    border-radius: 0 16px 0 16px;

    margin-bottom: 25px;
    margin-left: 15px;
    padding: 8px 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.11;
    letter-spacing: 0.72px;
`;