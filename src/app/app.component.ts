import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'labonneaffaire';
  titreArticle: string = "";
  prixArticle: number = 12;
  message: string = "";
  liste: any = null;

  constructor(private dataService: DataService){}
  
  ngOnInit(): void {
    //console.log("Ici onInit()")
    this.liste = this.dataService.listeArticle
  }

  onAffiche(arg: string){
    return this.message = "Merci d'avoir voté pour cette article : " + arg
  }

}
