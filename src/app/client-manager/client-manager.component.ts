import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-client-manager',
  templateUrl: './client-manager.component.html',
  styleUrls: ['./client-manager.component.scss']
})
export class ClientManagerComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  clientForm: FormGroup;
  get form(){ return this.clientForm.controls;}
  ngOnInit(): void {
    this.clientForm = this.fb.group({
      clientID:['',[Validators.required]],
      phone:['',[Validators.required]],
      firstName:[''],
      lastName:[''],
      dateOfBirth:[''],
      description:['']

    })
    
  }

}
