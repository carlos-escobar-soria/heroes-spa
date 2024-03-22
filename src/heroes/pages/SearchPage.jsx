import { useFormAction, useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string';
import { getheroesByName } from "../helpers/getheroesByName";

export const SearchPage = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    
    const { q="" } = queryString.parse( location.search );
    
    const {searchText, onInputChange} = useForm({
        searchText: q
    });
    
    const heroes = getheroesByName(q);


    const showSearch = (q.length === 0 );
    const showError = (q.length > 0) && heroes.length === 0; 

    // console.log(heroes);


    const onSearchSubmit = (event)=>{
        event.preventDefault();
        console.log("hola amor");
        if( searchText.trim().length <= 1) return;
        navigate(`?q=${ searchText }`)
    }

    return (
    <>
        <h1> Buscar de search </h1>
        <hr />
        <div className="row">
            <div className="col-5">
                <h4> Searching</h4>
                <hr />
                <form action="">
                    <input 
                        type="text"
                        placeholder="Search a hero"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        onChange={onInputChange}
                    />
                    <button
                        className="btn btn-primary mt-1"
                        onClick={onSearchSubmit}
                    >Search</button>
                </form>
            </div>
            <div className="col-7">
                <h4>Results</h4>
                
                {/* {
                    ( q == "" )? <div className="alert alert-danger">
                                    No hero with <b>{ q }</b>
                                </div>: <div className="alert alert-primary">
                            Search a hero
                        </div>
                } */}
                <div className="alert alert-danger" style={{ display: showError?'': 'none' }}>
                    No hero with <b>{ q }</b>
                </div>

                <div className="alert alert-primary" style={{ display: showSearch?'': 'none'}}>
                    Search a hero
                </div>

                {
                   heroes.map(hero=>{
                       return  <HeroCard key={hero.id} {...hero} />
                    })
                    
                }
            </div>
        </div>
    </>
    );
}