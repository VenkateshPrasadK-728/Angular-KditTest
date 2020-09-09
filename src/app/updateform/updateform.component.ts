import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from './../user-service.service';
import { Model } from './../model';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  id: number;
  model: Model;
  constructor(private route: ActivatedRoute,private router: Router,private UserServiceService: UserServiceService) { }

  ngOnInit() {


  this.id = this.route.snapshot.params['id'];
  
  this.UserServiceService.getUsersbyId(this.id)
    .subscribe(data => {
      console.log(data)
      this.model = data;
    }, error => console.log(error));
}

updateForm() {
  this.UserServiceService.updateUser(this.id, this.model)
    .subscribe(data => {
      console.log(data);
      this.model = new Model(2,"","",new Date(),101,8667745226);
    }, error => console.log(error));
}

public onSubmit() {
  this.updateForm();    
}
}

