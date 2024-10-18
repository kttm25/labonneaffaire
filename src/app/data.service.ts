import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService  {

  listeArticles = [
    {
      id:1,
      titrearticle :"Velo", 
      prixArticle:80,
      description:"Un super Velo tout terrain!",
      urlImg:"images/velo.png",
      dispo:false
    },
    {
      id:2,
      titrearticle :"TV", 
      prixArticle:30,
      description:"Un TV derniere generation",
      urlImg:"images/tv.png",
      dispo:true
    },
    {
      id:3,
      titrearticle :"Frigo", 
      prixArticle:120,
      description:"Un frigo tout neuf",
      urlImg:"images/frigo.png",
      dispo:true
    },
  ]
  constructor() { }

  getArticle(id:number){
    const article = this.listeArticles.find((a) =>{
      return a.id == id;
    });
    
    return article;
  }
}
