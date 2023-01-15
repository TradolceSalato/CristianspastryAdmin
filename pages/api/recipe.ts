// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import  { Recipe } from '../../utils/models';
import Recipes  from './recipes';
type Data = {
  Ricette : []
}

/*export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}*/

let Ricette: any[] = [
  
];

export default function Recipe_API(
  req : NextApiRequest,
  res: NextApiResponse
){
  const { method } = req;
  switch(method) {
    case 'GET' : 
     res.status(200).json(Recipes)
     break;
    case 'POST' :
      const ricetta = req.body;
      console.log(ricetta);
      Recipes.push(ricetta);
      res.status(200).json(Ricette);
      break; 
    default :
    res.setHeader("Allow", ["GET", "POST"])
    res.status(405).end(`Method ${method} Not Allowed`); 
    break; 
  } 
}


