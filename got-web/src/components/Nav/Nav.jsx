import { MyContext } from "../../shared/MyContext";
import React, { useContext } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav(){

    const {t} = useContext(MyContext)

    return <div className="nav">
        <NavLink to="/characters" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>{t("nav_text_characters")}</NavLink>
        <NavLink to="/houses" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>{t("nav_text_houses")}</NavLink>
        <NavLink to="/chronology" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>{t("nav_text_crono")}</NavLink>
    </div>
}