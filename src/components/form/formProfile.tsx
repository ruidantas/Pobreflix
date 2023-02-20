import * as Style from "./style";
import { Path } from "../../types/routes";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { Api } from "../../data/api/api";
import { FormInput } from "./types/types";

export function Form() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data: FormInput = {
      userEmail: localStorage.getItem("email")||"",
      movie: e.currentTarget.movie.value,
      serie: e.currentTarget.serie.value,
      anime: e.currentTarget.anime.value,
    };

    const response = await Api.createPorfile(data);
    if (response) {
      navigate(Path.HOME);
    }
  }

  return (
    
        <Style.Form>
          <Style.FormData onSubmit={handleSubmit}>
            <h1>Perfil</h1>          
            <Style.inputProfile
              type="text"
              placeholder="Escreva o ID do Filme"
              name="movie"
            />
            <Style.inputProfile
              type="text"
              placeholder="Escreva o ID da Série"
              name="serie"
            />
            <Style.inputProfile
              type="text"
              placeholder="Escreva o ID do Anime"
              name="anime"
            />
            <Style.divbuttonformProfile>
              <Style.buttonformProfile
                type="submit"               
              >
                Salvar
              </Style.buttonformProfile>
              <Style.buttonformProfile
                type="submit"
                onClick={() => {
                  navigate(Path.HOME);
                }}
              >
                Voltar
              </Style.buttonformProfile>
            </Style.divbuttonformProfile>
          </Style.FormData>
        </Style.Form>
      
    
  );
}
