

import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import AddRecipeForm from '../components/Forms/AddRecipeForm';
import Layout from '../components/Layout/Layout';
import styles from '../styles/AddRecipe.module.css'
import '../styles/index.module.css';
export default function AddRecipe() {
  return (
    <>
    <Layout>  
      <AddRecipeForm/>
    </Layout>
   </>
  )
}

const RicettaAggiunta = () => {
    alert("RICETTA AGGIUNTA");
    console.log("RICETTA AGGIUNTA!!")
}
