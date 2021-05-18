import { useCharacters } from '../../api/hooks/marvelCharacterHook';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import React from 'react';
import { Button, 
         Card,
         CardActions,
         CardContent,
         CardMedia,
         Grid,         
         Typography,          
         CssBaseline,
         AppBar,       
         Toolbar,
         CardActionArea} from '@material-ui/core';


export function CharactersList() {
    const { characters } = useCharacters();
    const classes = useStyles();

    return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>          
          <Typography variant="h6" align="center" color="inherit" noWrap>
            Marvel Characters
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
          <Grid container spacing={4}>
            {characters.map((character) => (
              <Grid item key={character.id} xs={12} sm={6} md={4}>                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
                    title={character.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {character.name}
                    </Typography>
                    <Typography>
                      {(character.description.length) > 0 ?
                       (character.description.substring(0,100)) :
                       (character.series.items.slice(0, 3).map((series, index) => { 
                                    return <p key={index}>{series.name}</p>
                                }))
                      }
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <CardActionArea>
                      <Button size="medium" color="secondary">
                        <Link to={`/character/${character.id}`}>DETAILS</Link>                          
                      </Button>
                    </CardActionArea>               
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </main>    
    </React.Fragment>
    );
}