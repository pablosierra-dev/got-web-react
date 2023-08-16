import React from "react";
import { Route, Routes as RoutesDom } from "react-router-dom";
import CharactersPage from "./CharactersPage/CharactersPage";
import HousesPage from "./HousesPage/HousesPage";
import CronoPage from "./CronoPage/CronoPage";
import HomePage from "./HomePage/HomePage";
import CharactersDetailPage from "./CharactersDetailPage/CharactersDetailPage";
import HousesDetailPage from "./HousesDetailPage/HousesDetailPage";

export default function Routes(){
    return <RoutesDom>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/characters" element={<CharactersPage/>}/>
        <Route path="/characters/:id" element={<CharactersDetailPage />} />
        <Route path="/houses/:id" element={<HousesDetailPage/>} />
        <Route path="/houses" element={<HousesPage/>}/>
        <Route path="/chronology" element={<CronoPage/>}/>
    </RoutesDom>

    
}