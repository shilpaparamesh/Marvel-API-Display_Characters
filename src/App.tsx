import { CharactersProvider } from "./api/hooks/marvelCharacterHook";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { MarvelCharacterDetail } from "./components/MarvelCharacterDetail";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <CharactersProvider>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/character/:id" component={MarvelCharacterDetail} />
        </Switch>
      </Router>
      <GlobalStyle />
    </CharactersProvider>
  );
}
