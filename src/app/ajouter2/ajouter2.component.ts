import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter2',
  templateUrl: './ajouter2.component.html',
  styleUrl: './ajouter2.component.css'
})
export class Ajouter2Component implements OnInit{

  titleToAdd = new FormControl('');
  priceToAdd = new FormControl('');

  constructor(){}

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log('newTitle : ' + newTitle);
    console.log('newPrice : ' + newPrice);
  }
}
