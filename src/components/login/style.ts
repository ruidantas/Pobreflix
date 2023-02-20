import styled, { css } from "styled-components";


export type StyledForm = {
    error: boolean;
};


export const loginName = styled.h1`
${({ theme }) => css`
color: ${theme.colors.baseBg4};
padding-bottom: 1rem;
`}
`; 

export const Body = styled.div`
${({ theme }) => css`
display:flex;
justify-content: center;
align-items: center;
background-color: ${theme.colors.baseBg1};
height: 100vh;
width: 100%;
font-family: ${theme.source.fontFamily};
`}
`; 

export const Login = styled.div`
${({theme}) => css`
display: flex;
align-items: center;
justify-content: center;
height: 40vh;
width: 40%;
margin: 0 auto;
background-color: ${theme.colors.baseBg2};
`}
`;

export const Form = styled.form<StyledForm>`
text-align: center;
padding-top: 3rem;
height: 80%;
width: 80%;
border: ${(props) => props.error ? '2px solid red' : '2px solid'};
border-radius: .5rem;
background-color: ${(props) => props.theme.colors.baseBg1};

`
export const Register = styled.div`
${() => css`
text-align: center;
font-weight: 700;
margin-top: 2rem;
`}
`;

export const ButtonRegister = styled.button`
${({theme}) => css`
font-family: ${theme.source.fontFamily};
font-size: ${theme.source.fontSize};
cursor: pointer;
`}
`;

export const ButtonLogin = styled.button`
${({theme}) => css`
font-family: ${theme.source.fontFamily};
font-size: ${theme.source.fontSize};
cursor: pointer;
`}
`;

export const DivButtonInput = styled.button`
display: flex;
flex-direction: row;
margin: 0 auto;
`