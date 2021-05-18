import React from 'react';
import { useStyles } from './styles';
import Pagination from '@material-ui/lab/Pagination';
import { useCharacters } from "../../api/hooks/marvelCharacterHook";

export function PaginationOutlined(this: any) {

   const classes = useStyles();
   const { currentPage, lastPageNumber, PageItems } = useCharacters();

   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    PageItems(value);
  };

    return (
    <div className={classes.root}>
      <Pagination page={currentPage} count={lastPageNumber} variant="outlined" color="primary" onChange={handleChange}/>    
    </div>
  );

}



