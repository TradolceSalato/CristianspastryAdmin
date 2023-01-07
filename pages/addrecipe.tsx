

import React from 'react'

export default function AddRecipe() {
  return (
    <>
     <form method='POST' action='http://localhost:3000/api/recipe'>
      <div className="col-md-6">
          <label htmlFor="TitoloRicetta" className="form-label">Titolo Ricetta</label>
          <input type="Titolo Ricetta" className="form-control" id="inputEmail4" name="TitoloRicetta" />
        </div>
        <div className="col-md-6">
          <label htmlFor="UrlImmagine" className=" form-label">Url Immagine</label>
          <input type="UrlImmagine" className="form-control" id="inputPassword4" name="UrlImmagine" />
        </div>
        <div className="col-12">
          <label htmlFor="Ingredienti" className="form-label">Ingredienti</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="" name="Ingredienti" />
        </div>
        <div className="col-12">
          <label htmlFor="Passaggi" className="form-label">Passaggi</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="" name="Passaggi" />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Tempo Di Preparazione</label>
          <input type="number" className="form-control" id="inputZip" name="TempoDiPreparazione" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Note</label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Conferma
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={RicettaAggiunta}>Aggiungi Ricetta</button>
        </div>
      </form>
    </>
  )
}

const RicettaAggiunta = () => {
    alert("RICETTA AGGIUNTA");
    console.log("RICETTA AGGIUNTA!!")
}
