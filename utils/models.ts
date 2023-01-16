import { Url } from "url";

export class Recipe {
  
    TitoloRicetta: String;
    ImmagineRicetta: string;
    Ingredienti: String[];
    TempoDiPreparazione: Number;
    Passaggi: String[];
    Note: String[] | undefined;
    id : Number | null | undefined;
    constructor(id : Number | null | undefined , TitoloRicetta: String, ImmagineRicetta: string, Ingredienti: String[], TempoDiPreparazione: Number, Passaggi: String[], Note: String[] | undefined,) {
        this.id = id;
        this.TitoloRicetta = TitoloRicetta;
        this.ImmagineRicetta = ImmagineRicetta;
        this.Ingredienti = Ingredienti;
        this.TempoDiPreparazione = TempoDiPreparazione;
        this.Passaggi = Passaggi;
        this.Note = Note;
    }

}
//``;