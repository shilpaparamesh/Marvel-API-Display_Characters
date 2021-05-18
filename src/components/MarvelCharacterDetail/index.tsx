import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useCharacters } from '../../api/hooks/marvelCharacterHook';
import { Link } from 'react-router-dom';
import { Character } from '../../models/character';
import backIcon from '../../assets/back.svg';

import { Content } from './styles';
import Container from '@material-ui/core/Container';

type RouteParams = {
  id: string
}

export function MarvelCharacterDetail({ match }: RouteComponentProps<RouteParams>) {
  const { characters } = useCharacters();

  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const characterDetail = characters.filter((character: { id: number; }) => character.id === Number(match.params.id))
    if(characterDetail.length !== 0) {
      setCharacter(characterDetail[0]);
    }
  }, [])


  return (
    <Container>       
      <Content>
        <div>
          <img src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} alt={character?.name} />
          <h1>
            <Link to={`/`}>
              <img src={backIcon} alt="Back" />              
            </Link>
            {character?.name}            
          </h1>
        </div>
        <div>
          {character?.description !== undefined && character?.description.length > 0 &&
            <div>
              <strong>Description</strong>
              <p>{character?.description}</p>
            </div>
          }

          {character?.series !== undefined &&
            <div>
              <strong>Series</strong>
              <p>{character?.series.items.map((series, index) => {
                return <span key={index}>{series.name}</span>;
              })}</p>
            </div>
          }

          {character?.comics !== undefined &&
            <div>
              <strong>Comics</strong>
              <p>{character?.comics.items.map((comic, index) => {
                return <span key={index}>{comic.name}</span>;
              })}</p>
            </div>
          }

          {character?.events !== undefined &&
            <div>
              <strong>Events</strong>
              <p>{character?.events.items.map((event, index) => {
                return <span key={index}>{event.name}</span>;
              })}</p>
            </div>
          }
        </div>
      </Content>
    </Container>
  );
}
