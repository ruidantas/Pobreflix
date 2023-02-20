import Styled, {css} from 'styled-components';

export const Form = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg1};
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`}
`;

export const FormCard = Styled.form`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 50vh;
width: 20%;
text-align: center;
`}
`;

export const InputCard = Styled.input`
${({theme}) => css`
margin-top: 1rem;
border-radius: .1rem;
border: none;
cursor: pointer;
`}
`

export const FormData = Styled.form`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
height: 50vh;
width: 20%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`}
`;

export const inputProfile = Styled.input`
margin-top: 1rem;
border-radius: .1rem;
border: none;
cursor: pointer;
padding: .3rem;
`;

export const divbuttonformProfile = Styled.div`
height: 10%;
width: 40%;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
margin: 0 auto;
padding: 2rem;
`;

export const buttonformProfile = Styled.button`
${({theme}) => css`
background-color: ${theme.colors.baseBg4};
padding: .3rem;
cursor: pointer;
border-radius: .2rem;
`}
`;

export const FormMovieUpdate = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg3};
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`}
`;

export const FormMovie = Styled.div`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
height: 60vh;
width: 30%;
border: 1px solid;
text-align: center;
padding-top: 5rem;
`}
`;

export const InputMovieUpdate = Styled.h4`
margin-top: 1.5rem;
padding: .2rem;
border-radius: .2rem;
border: none;
`;

export const FormUpdateDivButton = Styled.div`
height: 5vh;
width: 60%;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
margin: 1.5rem auto;
`;

export const formUpdateButton = Styled.button`
${({theme}) => css`
background-color: ${theme.colors.baseBg2};
padding: 0.3rem;
cursor: pointer;
`}
`

export type InputProps = {
    error?: boolean;
  };
  
  export const PersonalizedInput = Styled.input<InputProps>`
    display: flex;
    width: 90%;
    margin: 0.5rem;
    border-radius: 0.2rem;
    border: none;
    border: ${(props) => (props.error ? "1px solid red" : "1px solid #ccc")};
    padding-left: 0.3rem;
  `;