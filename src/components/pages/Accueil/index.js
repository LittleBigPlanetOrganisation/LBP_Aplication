import React from 'react'
import { Button } from '../../Button';
import { Typography } from '@material-ui/core'
import Logo from './Logo'
import Clouds from './Clouds'

export default function Accueil() {
    return (
        <section className='accueil'>
            <img className='clouds' src={Clouds} alt="clouds"/>
            <Logo />
            <Typography variant="h2">
                'Partagez vos univers avec l'univers'
            </Typography>
        </section>
    );
}