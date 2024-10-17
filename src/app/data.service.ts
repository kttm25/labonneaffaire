import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService  {

  listeArticle = [
    {
      titrearticle :"Velo", 
      prixArticle:80,
      description:"Un super Velo tout terrain!",
      urlImg:"../assets/images/velo.png",
      dispo:false
    },
    {
      titrearticle :"TV", 
      prixArticle:30,
      description:"Un TV derniere generation",
      urlImg:"../assets/images/tv.png",
      dispo:true
    },
    {
      titrearticle :"Frigo", 
      prixArticle:120,
      description:"Un frigo tout neuf",
      urlImg:"../assets/images/frigo.png",
      dispo:true
    },
  ]
  constructor() { }
}
