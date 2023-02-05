``
import type { NextApiRequest, NextApiResponse } from 'next'
import {DataSnapshot, onValue, ref, set } from "firebase/database";
import { Db } from '@/firebase/config';
import {uid} from "uid"
import { FirebaseFunctions } from '@/firebase/functions';

type Data = {
  message: string,
  Recipes : []
}
let Recipes : any[] = [];


export default async function Recipe(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { method } = req;
    switch(method) {
     case 'GET' :
      new FirebaseFunctions().ReadDbRecipe(req,res) 
      break;
     case 'POST' : 
     const ricetta = req.body;
     new FirebaseFunctions().WriteDbRecipe(ricetta,req,res)
     break;
     case 'PUT' : 
      new FirebaseFunctions().UpDateDbRecipe(req,res)
      break;
     default :
     res.setHeader("Allow", ["GET", "POST","PUT","DELETE"],)
     res.setHeader('Content-Type', 'text/json')
    res.status(405).end(`Method ${method} Not Allowed`); 
    break;
    }
    return console.log("FUNZIONI ESEGUITE CORRETTAMENTE!!");
}
