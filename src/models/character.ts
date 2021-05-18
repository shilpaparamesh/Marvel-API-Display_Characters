export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    comics: {
      available: number;
      items: [{
        name: string,
      }],
    };
    stories: {
      items: [{
        name: string,
      }];
    };
    events: {
      items: [{
        name: string,
      }];
    };
    series: {
      items: [{
        name: string,
      }];
    };
  };

  export interface CharactersContextData {
    characters: Character[];   
    lastPageNumber: number,
    currentPage: number,    
    PageItems: (toPage: number) => void;    
};

  