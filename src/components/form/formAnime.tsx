import * as Style from './style';
import { FormDataProfile } from './types/types';
import { useNavigate, useParams } from 'react-router-dom';
import { FormEvent } from 'react';
import { Path } from '../../types/routes';
import { Api } from '../../data/api/api';


export function FormAnime() {
    const navigate = useNavigate();
    const id = useParams().id?.replace(":id", "");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data: FormDataProfile = {
            title: e.currentTarget.gameTitle.value,
            description: e.currentTarget.description.value,
            avaliation: Number(e.currentTarget.avaliation.value),
            image: e.currentTarget.image.value,
        }

        if(id){        
          const response = await Api.updateAnime(data, id)             
          if(response){
            navigate(Path.ANIMES);
          }
         }else{
        const response = await Api.createAnime(data);
        if (response) {
          navigate(Path.ANIMES);
        }
      }


    }
    return (
        <Style.Form>
            <Style.FormCard onSubmit={handleSubmit}>
                <h1>Anime</h1>
                <Style.InputCard type="text"
              placeholder="titulo do anime"
              name="gameTitle"/>
                <Style.InputCard type="text"
              placeholder="descrição do anime"
              name="description"/>
                <Style.InputCard type="number"
              placeholder="avaliação do anime"
              name="avaliation"/>
                <Style.InputCard type="text"
              placeholder="URL da imagem do anime"
              name="image"/>
              <Style.divbuttonformProfile>
            <Style.buttonformProfile type='submit'>
                Salvar
            </Style.buttonformProfile>
            <Style.buttonformProfile type='submit' onClick={() => {
                navigate(Path.HOME)
            }}>Voltar
            </Style.buttonformProfile>
            </Style.divbuttonformProfile>
            </Style.FormCard>
            
        </Style.Form>
    )
}