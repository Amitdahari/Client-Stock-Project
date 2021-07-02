import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  clientID: string = "";
  phone:string ="";
  firstName:string = "";
  lastName:string = "";
  dateOfbirth:Date = new Date();
  description:string = "";

  clientForm: FormGroup;
  user:any//todo

  constructor(private fb:FormBuilder, private userService: UsersService, private router: Router) { 
    this.clientForm = this.fb.group({
      clientID:['client',[Validators.required]],
      phone:['',[Validators.required]],
      firstName:[''],
      lastName:[''],
      dateOfBirth:[''],
      description:['']
    });
    this.user = this.router.getCurrentNavigation()?.extras.state?.user;
      this.clientID = this.user.idKey;
      this.phone = this.user.phone;
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.dateOfbirth = this.user.dateOfBirth;
      this.description = this.user.description;
      debugger
   }
  
  ngOnInit(): void {
      
  }

  save():void{
    debugger
  }

}
