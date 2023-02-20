import styled, { css } from "styled-components";

export const registration = styled.div`
${({ theme }) => css`
background-color: ${theme.colors.baseBg1};
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`}
`;

export const registrationLogin = styled.div`
${({ theme }) => css`
background-color: ${theme.colors.baseBg2};
text-align: center;
height: 50vh;
width: 22%;
`}
`;

export const TituloRegister = styled.h1`
color: #000000;
padding: 1rem;
display: flex;
justify-content: center;
`;


export const registrationform = styled.form`
${() => css`
display: flex;
flex-direction: column;
gap: 10px;
margin: 0 auto;
width: 60%;
margin-top: 3rem;
`}
`;

export const registrationDivButton = styled.div`
${({ theme }) => css`
width: 60%;
height: 10vh;
margin: 0 auto;
display: flex;
align-items: center;
gap: 10px;
`}
`;

export const registrationButton = styled.button`
${() => css`
height: 50%;
width: 100%;

`}
`;
