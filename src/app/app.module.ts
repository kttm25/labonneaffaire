import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { Ajouter2Component } from './ajouter2/ajouter2.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListeComponent,
    DetailsComponent,
    PagenotfoundComponent,
    AjouterComponent,
    Ajouter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
