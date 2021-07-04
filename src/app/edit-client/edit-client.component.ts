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
  phone: string = "";
  firstName: string = "";
  lastName: string = "";
  dateOfbirth: Date = new Date();
  description: string = "";

  clientForm: FormGroup;
  user: any//todo
  error: any;
  response: string = "";

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {
    this.clientForm = this.fb.group({
      clientID: ['client', [Validators.required]],
      phone: ['', [Validators.required]],
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      description: ['']
    });
    this.user = this.router.getCurrentNavigation()?.extras.state?.user;
    this.clientID = this.user.idKey;
    this.phone = this.user.phone;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.dateOfbirth = this.user.dateOfBirth;
    this.description = this.user.description;
    
  }

  ngOnInit(): void {

  }

  save(): void {
    var user = new User();
    user.IdKey = this.clientID;
    user.Phone = this.phone;
    user.DateOfBirth = this.dateOfbirth;
    user.FirstName = this.firstName;
    user.LastName = this.lastName;
    user.Description = this.description;

    this.userService.updateUser(user).subscribe(res => {
      this.response = "User has been updated!";
    }
      , err => {
        
        this.response = err.statusText
      })

  }

  phoneChanged: string = ''
  dateOfBirthChanged: string = ''
  firstNameChanged: string = ''
  lastNameChanged: string = ''
  descriptionChanged: string = ''

  isChangePhone() {
    if (this.user.phone != this.phone)
      this.phoneChanged = '*';
    else
      this.phoneChanged = ''
  }
  isChangeDateOfbirth() {
    
    if (this.user.dateOfBirth != this.dateOfbirth)
    {
    
      this.dateOfBirthChanged = '*';
    }
    else
      this.dateOfBirthChanged = ''
  }
  isChangeFirstName() {
    if (this.user.firstName != this.firstName)
      this.firstNameChanged = '*';
    else
      this.firstNameChanged = ''
  }
  isChangeLastName() {
    if (this.user.lastName != this.lastName)
      this.lastNameChanged = '*';
    else
      this.lastNameChanged = ''
  }
  isChangeDescription() {
    if (this.user.description != this.description)
      this.descriptionChanged = '*';
    else
      this.descriptionChanged = ''
  }

}
