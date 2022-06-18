import React from 'react';
import './Header.css';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header className="box">
            <h1>Taylor Shen</h1>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    > About </a>
                </li>
                <li className="nav-item">
                    <a href="#projects"
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                    > Projects </a>
                </li>
                <li className="nav-item">
                    <a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    > Contact </a>
                </li>
                <li className="nav-item">
                    <a href="https://github.com/tshen28/" target="_blank" className="nav-link"> Resume </a>
                </li>
            </ul>
        </header>
    )
};