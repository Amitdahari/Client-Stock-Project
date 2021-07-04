import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-client-manager',
  templateUrl: './client-manager.component.html',
  styleUrls: ['./client-manager.component.scss']
})
export class ClientManagerComponent implements OnInit {

  clientID: string = "";
  phone: string = "";
  firstName: string = "";
  lastName: string = "";
  dateOfbirth: Date = new Date();
  description: string = "";

  response: string = "";
 

  data:any;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router, private http: HttpClient) {
    this.clientForm = this.fb.group({
      clientID: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      description: ['']

    })


  }
  
  clientForm: FormGroup;
  ngOnInit(): void {
    this.http.get('/assets/config.json')
    .toPromise().then(data => {
      this.data = data
      
    })
  }

  save(): void {
    let user = new User();
    user.IdKey = this.clientID;
    user.Phone = this.phone;
    user.FirstName = this.firstName;
    user.LastName = this.lastName;
    user.DateOfBirth = this.dateOfbirth;
    user.Description = this.description;
    this.userService.addUser(user).subscribe(res => {
      this.response = "User has been Created!";
    })
  }

}
