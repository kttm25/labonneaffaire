import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  id: number = 0;
  titre: string = "";
  prix: number = 0;
  description: string = "";
  urlImg: string = "";

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];

    this.id = id;
    this.titre = this.dataService.getArticle(this.id)?.titrearticle || "";
    this.prix = this.dataService.getArticle(this.id)?.prixArticle || 0;
    this.description = this.dataService.getArticle(this.id)?.description || "";
    this.urlImg = this.dataService.getArticle(this.id)?.urlImg || "";
    this.dataService = new DataService();
  }
}
