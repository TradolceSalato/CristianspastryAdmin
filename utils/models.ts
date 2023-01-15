import { Url } from "url";

export class Recipe {
    TitoloRicetta: String;
    ImmagineRicetta: String;
    Ingredienti: String[];
    TempoDiPreparazione: Number;
    Passaggi: String[];
    Note: String[] | undefined;

    constructor(TitoloRicetta: String, ImmagineRicetta: String, Ingredienti: String[], TempoDiPreparazione: Number, Passaggi: String[], Note: String[] | undefined,) {
        this.TitoloRicetta = TitoloRicetta;
        this.ImmagineRicetta = ImmagineRicetta;
        this.Ingredienti = Ingredienti;
        this.TempoDiPreparazione = TempoDiPreparazione;
        this.Passaggi = Passaggi;
        this.Note = Note;
    }

    PrintRicetta(): any {
       const Ricetta = {
        Titolo : this.TitoloRicetta,
        ImmagineRicetta : this.ImmagineRicetta,
        Ingredienti :  this.Ingredienti,
        TempoDiPreparazione : this.TempoDiPreparazione,
        Passaggi : this.Passaggi,
        Note : this.Note,
       };
        alert(Ricetta)
    }

}
//``;