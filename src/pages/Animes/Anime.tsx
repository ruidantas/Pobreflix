import * as Style from "./Style";
import { Card } from "./types/animeCard";
import { Api } from "../../data/api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Path } from "../../types/routes";

export function Anime() {
  const [anime, setAnime] = useState<Card[]>([]);
  const [control, setControl] = useState(false)
  const navigate = useNavigate();

  async function getAllAnime() {
    const response = await Api.getAnime();
    setAnime(response);
  }

  async function deleteCardAnime(id: string) {
    const response = await Api.deleteAnime(id);
    if(response){
      render()
    }
  }

  function render(){
    setControl(!control)
  }

  useEffect(() => {
    getAllAnime();
  }, [control]);

  return (
    <Style.AnimeDiv>
      <Style.animeDivButton>
        <Style.animeButton
          onClick={() => {
            navigate(Path.HOME);
          }}
        >Voltar</Style.animeButton>
      </Style.animeDivButton>
      <Style.animeBody>
        {anime.map((el, index) => (
          <Style.animeCard key={index}>
            <h4>{el.title}</h4>
            <Style.animeImg src={el.image} alt="img" />
            <p>{el.description}</p>
            <p>{el.avaliation}</p>
            <Style.AnimeDivMenu>
                  <Style.AnimeButtonMenu
                    onClick={() => {                      
                      navigate(Path.FORM_ANIME_UPDATE + el.id);
                    }}
                  >
                    Atualizar
                  </Style.AnimeButtonMenu>
                  <Style.AnimeButtonMenu
                    onClick={() => {
                      deleteCardAnime(el.id);
                    }}
                  >
                    Remover
                  </Style.AnimeButtonMenu>
                </Style.AnimeDivMenu>
          </Style.animeCard>
        ))}
      </Style.animeBody>
    </Style.AnimeDiv>
  );
}
