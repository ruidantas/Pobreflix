import * as Style from "./style";
import { FormDataProfile } from "./types/types";
import { useNavigate, useParams } from "react-router-dom";
import { FormEvent, useState, useEffect } from "react";
import { Path } from "../../types/routes";
import { Api } from "../../data/api/api";
import { Card } from "../../pages/Movies/types/movieCard";

export function FormMovie() {
  const [card, setCard] = useState<Card[]>([])
  const navigate = useNavigate();
 
  const id = useParams().id?.replace(":id", "")
  
    async function getCardById() {
      if(id) {
      const response = await Api.getMovieById(id)
      setCard(response)
    }
  }

  useEffect(() => {
    getCardById();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const data: FormDataProfile = {
      title: e.currentTarget.gameTitle.value, 
      description: e.currentTarget.description.value,
      avaliation: Number(e.currentTarget.avaliation.value),
      image: e.currentTarget.image.value,
    };      
     
    
     if(id){     
     
      
      const response = await Api.updateMovie(data, id)  
      console.log("log 2", response)    
      if(response){
        navigate(Path.MOVIES);
      }
     }else{
       const response = await Api.createMovie(data); 
       if(response){
         navigate(Path.MOVIES);
       }
     }

    
    
    
  }

  return (
    <Style.Form>
      <Style.FormCard onSubmit={handleSubmit}>
        <h1>Movies</h1>
        <Style.InputCard
          type="text"
          placeholder="titulo do filme"
          name="gameTitle"
        />
        <Style.InputCard
          type="text"
          placeholder="descrição do filme"
          name="description"
        />
        <Style.InputCard
          type="number"
          placeholder="avaliação do filme"
          name="avaliation"
        />
        <Style.InputCard
          type="text"
          placeholder="URL da imagem do filme"
          name="image"
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
      </Style.FormCard>
    </Style.Form>
  );
}

