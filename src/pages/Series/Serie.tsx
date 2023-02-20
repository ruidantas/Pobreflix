import * as Style from "./Style";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Path } from "../../types/routes";
import { Card } from "./types/serieCard";
import { Api } from "../../data/api/api";

export function Serie() {
  const navigate = useNavigate();
  const [serie, setSerie] = useState<Card[]>([]);
  const [control, setControl] = useState(false);

  async function getAllSerie() {
    const response = await Api.getSerie();
    setSerie(response);
  }

  async function deleteCardSerie(id: string) {
    const response = await Api.deleteSerie(id);
    if (response) {
      render();
    }
  }

  function render() {
    setControl(!control);
  }

  useEffect(() => {
    getAllSerie();
  }, [control]);

  return (
    <Style.Serie>
      <Style.SerieDivButton>
        <Style.SerieButton
          onClick={() => {
            navigate(Path.HOME);
          }}
        >
          Voltar
        </Style.SerieButton>
      </Style.SerieDivButton>
      <Style.SerieDiv>
        {serie.map((el, index) => (
          <Style.SerieBody key={index}>
            <h4>{el.title}</h4>
            <Style.SerieImg src={el.image} alt="img" />
            <p>{el.description}</p>
            <p>{el.avaliation}</p>
            <Style.SerieDivMenu>
                  <Style.SerieButtonMenu
                    onClick={() => {                      
                      navigate(Path.FORM_SERIE_UPDATE + el.id);
                    }}
                  >
                    Atualizar
                  </Style.SerieButtonMenu>
                  <Style.SerieButtonMenu
                    onClick={() => {
                      deleteCardSerie(el.id);
                    }}
                  >
                    Remover
                  </Style.SerieButtonMenu>
                </Style.SerieDivMenu>
          </Style.SerieBody>
        ))}
      </Style.SerieDiv>
    </Style.Serie>
  );
}
