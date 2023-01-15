

import React from 'react'
import Layout from '../components/Layout/Layout'
import styles from '../styles/GetRecipe.module.css'
import { Card, Button } from 'react-bootstrap';
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next';

export default function GetRecipe({ recipes }: InferGetStaticPropsType<typeof getStaticProps>) {
   return (
      <>
         <Layout>
            <h1 className={styles.Title}> Ricette </h1>


            {
               recipes.map((recipe: { TitoloRicetta: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; ingredienti: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
                  return (
                     <>
                        <h1>{recipe.TitoloRicetta}</h1>
                        <p>{recipe.ingredienti}</p>
                     </>
                  );
               })
            }
         </Layout>
      </>
   )
}

type Recipe = {
   TitoloRicetta: string
   UrlImmagine: string
   ingredienti: string[]
   TempoDiPreparazione: number
   passaggi: String;
}

export async function getStaticProps() {
   // Call an external API endpoint to get posts.
   // You can use any data fetching library
   const res = await fetch('http://localhost:3000/api/recipe')
   const recipes = await res.json()
 
   // By returning { props: { posts } }, the Blog component
   // will receive `posts` as a prop at build time
   return {
     props: {
       recipes,
     },
   }
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