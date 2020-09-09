import { UpdateformComponent } from './updateform/updateform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSearchDeleteComponent } from './list-search-delete/list-search-delete.component';
const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"register",component:RegisterformComponent},
   {path:"listsearchdelete",component:ListSearchDeleteComponent},
   {path:"updateform",component:UpdateformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
