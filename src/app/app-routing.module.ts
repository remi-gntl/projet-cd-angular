import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCDComponent } from './list-cd/list-cd.component';
import { CdComponent } from './cd/cd.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cds', component: ListCDComponent },
  { path: 'cd/:id', component: CdComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
