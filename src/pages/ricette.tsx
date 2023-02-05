

import { FirebaseFunctions } from '@/firebase/functions';
import { InferGetStaticPropsType } from 'next';
import React from 'react'

function ricette() {
 const res = fetch(`http://localhost:3000/api/recipe`).then((response)=>response.json).then((data)=>console.log(data)) 
 return (
    <>{fetch(`http://localhost:3000/api/recipe`).then((response)=>response.json).then((data)=>console.log(data))}</>
  )
}
/*export async function getServerSideProps() {
  const Dev_url = `http://localhost:3000/api/recipe`;
  //const Prod_url= `https://cristianspastry-admin.vercel.app/api/recipe`;
  const res = await fetch(Dev_url)
  const data = await res.json()

  if (!data) {
     return {
        notFound: true,
     }
  }
  return console.log(data)
  //return { props: { data } }
}*/
export default ricette;