import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";


export const HeroList = ({publisher}) => {

    const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher]);

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {heroes.map((hero)=>{
                    // return  <li key={hero.id}>{hero.id}</li>;
                    return <HeroCard key={hero.id} {...hero}/>
                })}
            </div>
        </>
    );

}