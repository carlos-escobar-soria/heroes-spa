import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { MarvelPage } from "../pages/MarvelPage";
import { DCPages } from "../pages/DCPages";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage/>}/>
                    <Route path="dc" element={<DCPages/>}/>
                    <Route path="search" element={<SearchPage/>}/>
                    <Route path="hero/:id" element={<HeroPage/>}/>
                    <Route path="/" element={<Navigate to="/marvel"/>}/>
                </Routes>
            </div>
        </>
    );
}