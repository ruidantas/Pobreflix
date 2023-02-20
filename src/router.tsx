import { Routes, Route } from "react-router-dom";
import { Path } from "./types/routes";
import { Login } from "./components/login/login";
import { Registration } from "./components/registration/registration";
import { Home } from "./pages/Home/Home";
import { Form } from "./components/form/formProfile";
import { Movie } from "./pages/Movies/Movie";
import { Serie } from "./pages/Series/Serie";
import { Anime } from "./pages/Animes/Anime";
import { Profile } from "./pages/Profile/Profile";
import { FormMovie } from "./components/form/formMovie";
import { FormSerie } from "./components/form/formSerie";
import { FormAnime } from "./components/form/formAnime";


export function Router() {
  return (
    <Routes>
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.REGISTRATION} element={<Registration />} />
      <Route path={Path.HOME} element={<Home />} />
      <Route path={Path.FORM} element={<Form/>} />
      <Route path={Path.FORM_MOVIE} element={<FormMovie/>} />
      <Route path={Path.FORM_MOVIE_UPDATE} element={<FormMovie/>} />
      <Route path={Path.FORM_SERIE_UPDATE} element={<FormSerie/>} />
      <Route path={Path.FORM_ANIME_UPDATE} element={<FormAnime/>} />
      <Route path={Path.FORM_SERIE} element={<FormSerie/>} />
      <Route path={Path.FORM_ANIME} element={<FormAnime/>} />
      <Route path={Path.PROFILE} element={<Profile/>}/>
      <Route path={Path.MOVIES} element={<Movie/>}/>
      <Route path={Path.SERIES} element={<Serie/>} />
      <Route path={Path.ANIMES} element={<Anime/>} />
    </Routes>
  );
}
