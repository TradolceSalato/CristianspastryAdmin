

import React from 'react'
import Layout from '../components/Layout/Layout'
import styles from '../styles/GetRecipe.module.css'
import { Card, Button, CardGroup } from 'react-bootstrap';
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Recipe } from '../utils/models';
import RecipeCard from '../components/Cards/RecipeCard';



type GetRecipe = {
   Card: {
      titolo: Recipe["TitoloRicetta"],
      img: Recipe["ImmagineRicetta"],
      ingredienti: Recipe["Ingredienti"],
   }
}

export default function GetRecipe({ data }: InferGetStaticPropsType<typeof getServerSideProps>, props: GetRecipe) {

   return (
      <>
         <Layout>
            <h1 className={styles.Title}> Ricette </h1>
            {
               data.map((recipe: Recipe) => (
                  <>
                  
                     <RecipeCard TitoloRicetta={recipe.TitoloRicetta} ImmagineRicetta={recipe.ImmagineRicetta} Ingredienti={[]} TempoDiPreparazione={0} Passaggi={[]} Note={undefined}
                     />
                  
                     
                  </>
               ))
            }
         </Layout>
      </>
   )
}


export async function getServerSideProps(context: any) {
   const res = await fetch(`http://localhost:3000/api/recipe`)
   const data = await res.json()

   if (!data) {
      return {
         notFound: true,
      }
   }

   return { props: { data } }
}

/*export const getStaticProps: GetStaticProps<{ recipes: Recipe[] }> = async () => {
   const res = await fetch('http://localhost:3000/api/recipe')
   const recipes: Recipe[] = await res.json()
   recipes.map(recipe => recipe)
   return {
      props: {
         recipes,
      },
   }
}*/