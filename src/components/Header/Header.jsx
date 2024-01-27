import { forwardRef, useState } from "react";
import './Header.css';
import logo from './static/logo.svg';
import logoText from './static/logoText.svg';

function Header(props,ref){
    return (
        <section ref={ref} className="header">
            <div className="logo-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <img src={logoText} alt="Spring Money"></img>
                </div>
            </div>
            {props.children?<div className="category">{props.children}</div>:<div></div>}
        </section>
    );
};
export default forwardRef(Header);