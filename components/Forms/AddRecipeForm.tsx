import { Constants } from "../../utils/constants";
import { Form, Button } from 'react-bootstrap';
import styles from "../styles/styles.module.css";
import { FormEventHandler } from "react";
import axios from 'axios';

const handleSubmit = (event : FormEventHandler<HTMLFormElement>) => {
  

  // Crea l'oggetto FormData per inviare i dati del form
  const formData = new FormData();

  // Invia la richiesta POST all'API REST
  fetch('http://localhost:3000/api/recipe', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        alert('Ricetta salvata con successo');
      } else {
        alert('Errore durante l\'invio dei dati');
      }
    });

};

const handleSubmit2 = async (event: any) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  try{
     const res = await fetch('http://localhost:3000/api/recipe', {
      method : 'POST',
      body : formData,
     }).then((response)=>{
      if(response.status == 200) {
        alert('Recetta Salvata con successo')
        console.log(response)
      } else {
        alert('errore durante l\'invio dei dati')
      }
     });
  }catch(err){
     console.log(err);
  }
}


function AddRecipeForm() {
  const form = Constants.Form;
  const label = Constants.Form.Label;
  return (
    <>
      <div className={styles.containerForm}>
        <Form className={styles.Form} action={form.Action} method={form.Method} name={form.Name} onSubmit={handleSubmit2}>
          <legend className={styles.Title}>Aggiungi Ricetta</legend>
          <Form.Group className="col-span-1 sm:col-span-3 box-border" controlId="TitoloRicetta">
            <Form.Label htmlFor={label.TitoloRicetta.htmlFor} className="block text-sm font-medium text-gray-700">
              {label.TitoloRicetta.titolo}
            </Form.Label>
            <Form.Control
              type={label.TitoloRicetta.type}
              name={label.TitoloRicetta.name}
              id={label.TitoloRicetta.id}
              autoComplete={label.TitoloRicetta.autoComplete}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </Form.Group>
          <Form.Group className="col-span-6 sm:col-span-3" controlId="UrlImmagine">
            <Form.Label htmlFor={label.TitoloRicetta.htmlFor} className="block text-sm font-medium text-gray-700">
              {label.UrlImmaggine.titolo}
            </Form.Label>
            <Form.Control
              type={label.UrlImmaggine.type}
              name={label.UrlImmaggine.name}
              id={label.UrlImmaggine.id}
              autoComplete={label.UrlImmaggine.autoComplete}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </Form.Group>
          <Form.Group className="col-span-6 sm:col-span-4">
            <Form.Label htmlFor={label.Ingredienti.htmlFor} className="block text-sm font-medium text-gray-700">
              {label.Ingredienti.titolo}
            </Form.Label>
            <Form.Control
              type={label.Ingredienti.type}
              name={label.Ingredienti.name}
              id={label.Ingredienti.id}
              autoComplete={label.Ingredienti.autoComplete}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </Form.Group>
          <Form.Group className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Form.Label htmlFor={label.TempoDiPreparazione.htmlFor} className="block text-sm font-medium text-gray-700">
                  {label.TempoDiPreparazione.titolo}
                </Form.Label>
                <Form.Control
                  type={label.TempoDiPreparazione.type}
                  name={label.TempoDiPreparazione.name}
                  id={label.TempoDiPreparazione.id}
                  autoComplete={label.TempoDiPreparazione.autoComplete}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor={label.Passaggi.htmlFor} className="block text-sm font-medium text-gray-700">
                  {label.Passaggi.name}
                </Form.Label>
                <div className="mt-1">
                  <textarea
                    id={label.Passaggi.id}
                    name={label.Passaggi.name}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Passaggi"
                    defaultValue={''} />
                </div>
              </Form.Group>
              <div className="0 px-4 py-3 text-center sm:px-6">
            <Button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Aggiungi Ricetta
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}


export default AddRecipeForm;

/*
<div>
                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>*/