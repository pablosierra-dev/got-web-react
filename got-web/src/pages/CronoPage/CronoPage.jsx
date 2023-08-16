import { useEffect, useState } from "react";
import CronoGallery from "./CronoGallery";
import axios from "axios";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import "./CronoPage.css";
import Nav from "../../components/Nav/Nav";
import LangNav from "../../components/LangNav/LangNav";
import HomeButton from "../../components/HomeButton/HomeButton";


export default function CronoPage(){

    const[characters, setCharacters] = useState([])
    const[ascendingOrder, setAscendingOrder] = useState(true)

    async function getCharacters() {
        try {
            const {data} = await axios("http://localhost:3000/characters");
            const filteredCharacters = data.filter(character => character.age)
            const orderedCharacters = filteredCharacters.sort((a, b) =>  {
                if (ascendingOrder) {
                    return a.age - b.age;
                } else {
                    return b.age - a.age;
                }
            });
            setCharacters(orderedCharacters);

        } catch (error) {
            console.log(error);
        }
    }

    const changeOrderCharacters = () => {
        setAscendingOrder(!ascendingOrder);
    };

    useEffect(() => {
        getCharacters()
    }, [ascendingOrder])

    return <div className="crono-page">
    <div className="crono-page-header">
        <HomeButton/>
        <LangNav/>
    </div>
    <SimpleBar style={{ maxHeight: 650 }}>
        <div className="crono-gallery-container">
                {characters.length>0 && <button className="btn-order" onClick={changeOrderCharacters}>{characters[0].age}</button>}
            <CronoGallery data={characters}/>
        </div>
    </SimpleBar>
    <Nav/>
    </div>

}