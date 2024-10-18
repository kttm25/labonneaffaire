import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AjouterComponent } from './ajouter/ajouter.component';

const routes: Routes = [
  {path: "", component: ListeComponent},
  {path: "liste", redirectTo: ""},
  {path: "details/:id", component: DetailsComponent},
  {path: "ajouter", component: AjouterComponent},
  {path: "**", component: PagenotfoundComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
