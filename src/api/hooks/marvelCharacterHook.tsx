import { Md5 } from 'md5-typescript';
import { createContext, ReactNode, useEffect, useState, useContext } from 'react';
import { Character, CharactersContextData } from '../../models/character';

interface RequestParams {
    limit: number,
    offset: number,
    query?: string
}

interface CharactersProviderProps {
    children: ReactNode;
}

const CharactersContext = createContext<CharactersContextData>(
    {} as CharactersContextData
);

export function CharactersProvider({ children }: CharactersProviderProps) {

    const [characters, setCharacters] = useState<Character[]>([])
    const [totalCharacters, setTotalCharacters] = useState(0);

    const characterPerPage = 12;

    const lastPageNumber = Math.ceil(totalCharacters / characterPerPage);

    const [currentPage, setCurrentPage] = useState(1);   

    const [query, setQuery] = useState('');

    async function PageItems(toPage: number) {
        setCurrentPage(toPage);        
        await populateCurrentPage({
            limit: characterPerPage,
            offset: ((toPage - 1) * characterPerPage)
        });
    }

    async function populateCurrentPage(requestParams: RequestParams) {
        const apiPublicKey = process.env.REACT_APP_MARVEL_API_PUPLIC_KEY;
        const apiPrivateKey = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
        const timeStamp = Date.now().toString();

        const hash = Md5.init(timeStamp + apiPrivateKey + apiPublicKey);

        let URI = `${process.env.REACT_APP_MARVEL_API_URI}limit=${requestParams.limit}&offset=${requestParams.offset}&ts=${timeStamp}&apikey=${apiPublicKey}&hash=${hash}`;

        if (query !== '') {
            URI = `${URI}&name=${encodeURIComponent(query)}`;
        }
        
        await fetch(URI)
            .then(response => response.json())
            .then(response => {
                if (response.data !== undefined) {
                    setTotalCharacters(response.data.total);
                    setCharacters(response.data.results);
                }
            });            
    }

    useEffect(() => {
        setQuery('');        
        populateCurrentPage({
            limit: characterPerPage,
            offset: 0,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (        
        <CharactersContext.Provider value={{
            characters,
            lastPageNumber,
            currentPage,                   
            PageItems            
        }}>
            {children}
        </CharactersContext.Provider>
    );
}

export function useCharacters() {
    const context = useContext(CharactersContext);
    return context;
}