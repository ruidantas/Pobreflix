
import styled, { css } from "styled-components";

export const Home = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.baseBg2};
    height: 100vh;
    width: 100%;
    
  `}
`;

export const PageHome = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    height: 100%;
    width: 120%;
  `}
`;

export const carouselHomeMovie = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    height: 25%;
    width: 100%;
  `}
`;

export const whapperHomeMovie = styled.div`
  width: 100%;
  font-size: 0;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
`;



export const carousel = styled.div`
  display: flex;
  gap: 20px;
  font-size: 0;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
`;

export const TitulosMenu = styled.h2`
color: #FFFFFF;
padding: 1rem;
display: flex;
justify-content: center;
font-size: 1rem;
font-family: Arial, Helvetica, sans-serif;
font-weight: 500;
`;


export const titulos = styled.h1`
color: #FFFFFF;
padding: 1rem;
display: flex;
justify-content: center;
`;




export const carouselItem = styled.img`
  height: 234px;
  object-fit: cover;
  width: calc(20%);
`;





export const Menu = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    text-align: center;
    padding-top: 2rem;
  `}
`;

export const MenuHomeDiv = styled.div`
${({ theme }) => css`
display: flex;
align-items: center;
justify-content: center;
background-color: ${theme.colors.baseBg2};
border-radius: 7px ;
height: 7vh;
width: 70%;
margin: 0 auto;
margin-top: 1rem;
cursor: pointer;
`}
`;

export const MenuItem = styled.button`
  ${({ theme }) => css`
    
    border: none;
    font-family: ${theme.source.fontFamily};
    background-color: ${theme.colors.primaryColor};  
    
  `}
`;

export const HomeLogoutDiv = styled.div`
${({ theme }) => css`
height: 3vh;
width: 10%;
position: absolute;
top: 0;
right: 100;
left: 0;
`}
`;
export const HomeLogoutButton = styled.button`
margin-top: .5rem;
padding: .8rem;
width: 50%;
cursor: pointer;
background-color: white;
`;