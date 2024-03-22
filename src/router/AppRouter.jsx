import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import { LoginPage } from '../auth/pages/LoginPage';
import { DCPages } from '../heroes/pages/DCPages';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { Navbar } from '../ui/components/NavBar';
import { HeroesRoutes } from '../heroes/routers/HeroesRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Routes>
                {/* <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="dc" element={<DCPages/>}/> */}
                <Route 
                    path="login" 
                    element={<PublicRouter>
                            <LoginPage/>
                        </PublicRouter>}
                    
                />

                <Route 
                    path="/*" 
                    element={<PrivateRouter>
                        <HeroesRoutes/>
                    </PrivateRouter>}/>
                {/* <Route path="/" element={<Navigate to="/marvel"/>}/> */}
            </Routes>
        </>
    );
}