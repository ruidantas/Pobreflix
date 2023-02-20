import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Path } from "../../types/routes";

type teste = {
  image: string
}

export function Home() {
  const navigate = useNavigate();

  
  const [stateMovie, setStateMovie] = useState<teste[]>([])
  const [stateAnime, setStateAnime] = useState<teste[]>([])
  const [stateSerie, setStateSerie] = useState<teste[]>([])


   useEffect(() => {
    fetch("https://pobreflix.vercel.app/static/movies.json").then((res)=> res.json()).then(setStateMovie)

    fetch("https://pobreflix.vercel.app/static/series.json").then((res)=> res.json()).then(setStateSerie)

    fetch("https://pobreflix.vercel.app/static/animes.json").then((res)=> res.json()).then(setStateAnime)

  }, []) 

  

 
 function logout(){
  
  localStorage.removeItem("token");
  navigate(Path.LOGIN);
 }
 

  return (
    <Style.Home>
      <Style.HomeLogoutDiv>
      <Style.HomeLogoutButton onClick={logout}>
        Sair
      </Style.HomeLogoutButton>
      </Style.HomeLogoutDiv>
      <Style.PageHome>
        <Style.titulos>FILMES</Style.titulos>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
             <Style.carousel>          
              {stateMovie.map((el) => {
                console.log(el)
                return (
                  <Style.carouselItem src={el.image} alt="img"/>
                )
              })}
            </Style.carousel>
          </Style.whapperHomeMovie>
        </Style.carouselHomeMovie>
        <Style.titulos>SERIES</Style.titulos>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
          <Style.carousel >
          {stateSerie.map((el) => (
          <Style.carouselItem src={el.image} alt="img"/>
          ))}
            </Style.carousel>
          </Style.whapperHomeMovie>          
        </Style.carouselHomeMovie>
        <Style.titulos>ANIMES</Style.titulos>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
          <Style.carousel >
          {stateAnime.map((el) => (
          <Style.carouselItem src={el.image} alt="img"/>
          ))}
          </Style.carousel>
          </Style.whapperHomeMovie>          
        </Style.carouselHomeMovie>
      </Style.PageHome>
      <Style.Menu>
        <Style.MenuHomeDiv onClick={() => {           
           navigate(Path.FORM);
         }}>       
         <Style.TitulosMenu>Criar Perfil </Style.TitulosMenu>     
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv onClick={() => {
            navigate(Path.PROFILE);
          }}>       
          <Style.TitulosMenu>Acessar Perfil </Style.TitulosMenu>         
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv onClick={() => {                      
            navigate(Path.FORM_MOVIE);
          }}>       
          <Style.TitulosMenu>Adicionar Novo Filme </Style.TitulosMenu>         
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv  onClick={() => {
            navigate(Path.MOVIES);
          }}>       
           <Style.TitulosMenu>Ver Todos os Filmes</Style.TitulosMenu>   
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv onClick={() => {
           
           navigate(Path.FORM_SERIE);
         }}>         
        <Style.TitulosMenu>Adicionar Nova Série</Style.TitulosMenu>         
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv onClick={() => {
            navigate(Path.SERIES);
          }}>       
          <Style.TitulosMenu>Ver Todas as Séries</Style.TitulosMenu>           
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv  onClick={() => {
            
            navigate(Path.FORM_ANIME);
          }}>       
          <Style.TitulosMenu>Adicionar Novo Anime</Style.TitulosMenu>          
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv onClick={() => {
            navigate(Path.ANIMES);
          }}>        
          <Style.TitulosMenu>Ver Todos os Animes</Style.TitulosMenu>          
        </Style.MenuHomeDiv>
      </Style.Menu>
    </Style.Home>
  );
}
