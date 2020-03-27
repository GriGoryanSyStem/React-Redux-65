import { NavLink } from 'react-router-dom'; //  NavLink to = {"/something name"} 20. Уроки
//activeClassName  20. Уроки
import React from "react";
import css from './NavBar.module.css'; // Урок 14. // don't use << _ >> && << - >> in css style. f.ex. _header or my-header;


const NavBar = () => {
    return (
        <nav className={css.nav}>
            <div className={`${css.item} ${css.active}`}>
                <NavLink to={"/profile"} activeClassName={css.active}>Profile</NavLink>
            </div>
            <div className={`${css.item} ${css.anotherClass}`}>
                <NavLink to={"/dialogs"} activeClassName={css.active}>Massages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={"/news"} activeClassName={css.active}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to = {"/users"} activeClassName={css.active}>Users</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={"/setting"} activeClassName={css.active}>Settings</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to = {"/friends"} activeClassName = {css.active}>My Friends</NavLink>
            </div>
        </nav>
    )
};

export default NavBar;