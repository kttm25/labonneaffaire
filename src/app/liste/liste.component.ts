import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit{
  message: string = "";
  liste: any;

  constructor(private dataService: DataService){}
  ngOnInit(): void {
    //console.log("Ici onInit()")
    this.liste = this.dataService.listeArticles
  }

  onAffiche(arg: string){
    return this.message = "Merci d'avoir voté pour cette article : " + arg
  }
}
