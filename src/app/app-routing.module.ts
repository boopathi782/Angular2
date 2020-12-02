import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppoimentcreateComponent } from './appoimentcreate/appoimentcreate.component';

const routes: Routes = [
  { path: '', component: AppoimentcreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
