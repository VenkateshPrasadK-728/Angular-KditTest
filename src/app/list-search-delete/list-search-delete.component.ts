import { UpdateformComponent } from './../updateform/updateform.component';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../user-service.service';
import { Model } from './../model';


@Component({
  selector: 'app-list-search-delete',
  templateUrl: './list-search-delete.component.html',
  styleUrls: ['./list-search-delete.component.css']
})
export class ListSearchDeleteComponent implements OnInit {

  id:number;
  event:string;
  model:Model;
  constructor(
    private UserServiceService:UserServiceService,
    private UpdateformComponent:UpdateformComponent,
    ) { }

  ngOnInit(){
    let resp=this.UserServiceService.deleteUser(this.id);
    resp.subscribe((data)=>this.model=data);
  }

  public delete(id:number){
    let resp= this.UserServiceService.deleteUser(id);
    resp.subscribe((data)=>this.model=data);
   }

   public getUsersbyId(){
    let resp= this.UserServiceService.getUsersbyId(this.id);
    resp.subscribe((data)=>this.model=data);
   }

  public update(id:number){
   this.UpdateformComponent.onSubmit();
   }

}
