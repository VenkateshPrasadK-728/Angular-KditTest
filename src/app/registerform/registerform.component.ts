import { Model } from './../model';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  model: Model=new Model(1,"","",new Date(),100,7092139778);
  message:any;
  constructor(private service:UserServiceService) { }

  ngOnInit() {
  }

  public registerNow(){
    let response=this.service.registerForm(this.model);
    response.subscribe((data)=>this.message=data);
      }
}
