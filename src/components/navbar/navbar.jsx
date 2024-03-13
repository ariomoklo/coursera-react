import React from "react";
import './navbar.css';
import { images } from '../../constants';

export default function Navbar() {
    const navElements = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
    return(
    <nav>
        <ul>
            <li>
                <a href="#?">
                    <img src={images.logo} alt="logo" />
                </a>
            </li>
            {
                navElements.map((element) => {
                    return (
                    <li key={element}>
                        <a href="#?">
                            {element}
                        </a>
                    </li>
                    );
                })
            }
        </ul>
    </nav>);
};