import type { NextApiRequest, NextApiResponse } from 'next'
import  { Recipe } from '../../utils/models';
import Recipes  from './recipes';
type Data = {
  Ricette : []
}



let Ricette: any[] = [
  
];

export default function User(
  req : NextApiRequest,
  res: NextApiResponse
){
  const { method } = req;
  switch(method) {
    case 'POST' :
      const user = req.body;
      console.log(user)
      break; 
    default :
    res.setHeader("Allow", ["GET", "POST"])
    res.status(405).end(`Method ${method} Not Allowed`); 
    break; 
  } 
}

module.exports = User;