

import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Recipe } from '../../utils/models';
import styles from '../styles/styles.module.css'
export default function RecipeCard(recipe: Recipe) {
    return (
        <div className={styles.containerCard}>
            <Card className={styles.Card}>
                <Card.Img variant="top" src={recipe.ImmagineRicetta} />
                <Card.Body>
                    <Card.Title>{recipe.TitoloRicetta}</Card.Title>
                    <Card.Text>
                        {recipe.Ingredienti}
                    </Card.Text>
                    <Button variant="primary">Modifica Ricetta</Button>
                </Card.Body>
            </Card>
       </div>
    )
}