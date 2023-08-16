import "./LangNav.css";
import { MyContext } from "../../shared/MyContext";
import React, { useContext } from "react";

export default function LangNav() {

    const {changeLanguage} = useContext(MyContext)

    return (
        <div className="lang-nav">
            <button className="lang-nav-btn" onClick={() => changeLanguage('es')}>
                <img src="/img/es-lang-img.png" alt="ES"/>
            </button>
            <button className="lang-nav-btn" onClick={() => changeLanguage('en')}>
                <img src="/img/en-lang-img.png" alt="EN"/>
            </button>
    </div>
    )
}