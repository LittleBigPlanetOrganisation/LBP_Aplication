import React from 'react';
import './HeaderButton.css';
import { Link } from 'react-router-dom';

export function HeaderButton() {
    return (
        <Link to='connexion'>
            <button className='headerButton'>Préparer un voyage</button>
            <button className='headerButton'>Créer un carnet</button>
        </Link>
    );
}