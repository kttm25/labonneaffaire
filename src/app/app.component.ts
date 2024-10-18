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

  constructor(private dataService: DataService){}
  
  ngOnInit(): void {
  }

}
