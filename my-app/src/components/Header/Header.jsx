import React from "react";
import cc from './Header.module.css';
import {NavLink} from "react-router-dom"; // Урок 14. // don't use << _ >> && << - >> in css style. f.ex. _header or my-header;

const Header = (props) => {
return(
        <header className={cc.header}>

            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="image"/>

            <div className={cc.login_block}>
                {props.isAuth ? props.login : <NavLink to = {'/login'}>Login el</NavLink>}

            </div>

        </header>
)
};
export  default Header;

