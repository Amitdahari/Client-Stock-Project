import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-client-manager',
  templateUrl: './client-manager.component.html',
  styleUrls: ['./client-manager.component.scss']
})
export class ClientManagerComponent implements OnInit {

  clientID: string = "";
  phone:string ="";
  firstName:string = "";
  lastName:string = "";
  dateOfbirth:Date = new Date();
  description:string = "";

  constructor(private fb:FormBuilder, private userService: UsersService) {
    this.clientForm = this.fb.group({
      clientID:['',[Validators.required]],
      phone:['',[Validators.required]],
      firstName:[''],
      lastName:[''],
      dateOfBirth:[''],
      description:['']

    })
   }
  clientForm: FormGroup;
  ngOnInit(): void {
    
  }

  save():void{
    let user = {
      IdKey: this.clientID,
      Phone: this.phone,
      FirstName: this.firstName,
      LastName: this.lastName,
      DateOfBirth: this.dateOfbirth
    }
      this.userService.addUser(user).subscribe(res =>{
        console.log(res)
      })
  }

}
