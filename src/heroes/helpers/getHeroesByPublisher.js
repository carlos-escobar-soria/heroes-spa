import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    
    const validPublisehers = ['DC Comics', 'Marvel Comics'];
    if( !validPublisehers ) {
        throw new Error(`${ publisher } is not a valid publisher`)
    }

    return heroes.filter(hero => hero.publisher == publisher);
}