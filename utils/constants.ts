



export const Constants = {
  name_app: "Cristian's pastry",
  Author: "Cristian Sorrentino",
  navigation: [
    { name: 'Home', href: '/home', current: true },
    { name: 'Aggiungi Ricetta', href: '/addrecipe', current: false },
    { name: 'Ricette', href: '/getrecipe', current: false },
    { name: 'Calendar', href: '#', current: false }
  ],
  Form: {
    Action: "http://localhost:3000/getrecipe",
    Method: "POST",
    Name : "Aggiungi Ricetta",
    encType : "multipart/form-data",
    Label: {
      TitoloRicetta: {
        titolo: "Titolo Ricetta",
        htmlFor: "TitoloRicetta",
        type: "text",
        name: "TitoloRicetta",
        autoComplite: "Titolo Ricetta",
        id : "TitoloRicetta",
        autoComplete : "Titolo Ricetta"
      },
      UrlImmaggine : {
        titolo: "Url Immaggine",
        htmlFor: "UrlImmagine",
        type: "url",
        name: "UrlImmagine",
        autoComplite: "Url Immagine",
        id : "UrlImmaggine",
        autoComplete : "Url Immaggine"
      },
      Ingredienti : {
        titolo: "Ingredienti",
        htmlFor: "Ingredienti",
        type: "text",
        name: "Ingredienti",
        autoComplite: "Ingredienti",
        id : "Ingredienti",
        autoComplete : "Ingredienti"
      },
      TempoDiPreparazione : {
        titolo: "Tempo di preparazione",
        htmlFor: "TempoDiPreparazione",
        type: "number",
        name: "Tempo di preparazione",
        autoComplite: "Tempo di preparazione",
        id : "TempoDiPreparazione",
        autoComplete : "Url Immaggine"
      },
      Passaggi : {
        titolo: "Passaggi",
        htmlFor: "Passaggi",
        type: "text",
        name: "Passaggi",
        autoComplite: "Passaggi",
        id : "Passaggi",
        autoComplete : "Passaggi"
      },
      Note : {
        titolo: "Note",
        htmlFor: "Note",
        type: "text",
        name: "Note",
        autoComplite: "Note",
        id : "Note",
        autoComplete : "Note"
      },
    },
  },

}
