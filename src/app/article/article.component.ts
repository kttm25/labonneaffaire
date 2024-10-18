import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  //titrearticle: string = "Titre de l'article";
  //prixArticle: number = 12;
  @Input() id: number = 0;
  @Input() titrearticle: string = "Titre de l'article";
  @Input() prixArticle: number = 12;
  @Input() textAltImg: string = "Titre alternative de l'image";
  @Input() urlImg: string = "https://via.placeholder.com/350x200";
  @Input() dispo: boolean = false;
  @Input() description: string = '';
  
  @Output() info = new EventEmitter<string>();
  totalNbrLike: number = 0;
  comment: string = "";
  jaime: boolean = true
  

  constructor(){}
  ngOnInit(): void {
    //console.log("test");
    console.log(this.urlImg)
  }
  onLike() {
    if (this.jaime === true){
      this.totalNbrLike++;
      this.jaime = false
    } else {
      this.totalNbrLike--;
      this.jaime = true
    }
    this.info.emit(this.titrearticle)
  }

  getColor(){
    if(this.dispo)
      return "green"
    else 
      return "red"
  }
}