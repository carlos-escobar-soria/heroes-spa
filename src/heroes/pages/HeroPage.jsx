import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HeroList } from "../components/HeroList";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();// no olvides que es necesario para navegar 
    
    const hero = useMemo(()=>getHeroById( id ), [id]);

    const onNavigateBack = ()=>{
        navigate(-1)
    }

    if( !hero ) {
        return <Navigate to="/marvel"/>
    }

    console.log(hero);
    return (
        <>
            {/* <h1> Elementos de Hero</h1>
            <pre>{JSON.stringify(hero, null, 3)}</pre> */}
            {/* <HeroList publisher={"DC Comics"}/> */}
            <div className="row mt-5">
                <div className="col-4">
                    <img 
                        src={`/assets/heroes/${ id }.jpg`} 
                        alt={ hero.superhero }
                        className="img-thumbnail" 
                    />
                </div>
            
                <div className="col-8">
                    <h3>{ hero.superhero }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego }</li>
                        <li className="list-group-item"> <b>Publisher:</b> { hero.publisher }</li>
                        <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance }</li>

                    </ul>
                    <h5 className="mt-3">Characters</h5>
                    <p>{ hero.characters } </p>
                    <button 
                        className="btn btn-outline-primary"
                        onClick={onNavigateBack}
                    >
                        regresar
                    </button>
                </div>
            </div>
        </>
    );
}