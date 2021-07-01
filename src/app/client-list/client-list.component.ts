import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

interface Userchoice {
  value: string;
  userchoiceviewValue: string;
}

export interface PeriodicElement {
  id: string;
  phone: string;
  firstName: string;
  lastName: string;
  dateOfbirth: string;
}


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  userchoices: Userchoice[] = [
    {value: 'id-value', userchoiceviewValue: 'Id'},
    {value: 'phone-value', userchoiceviewValue: 'Phone'},
    
  ];

  displayedColumns: string[] = ['Id', 'IdKey', 'Phone', 'First Name', 'Last Name'];
  clientDataSource :any
  clickedRows = new Set<PeriodicElement>();

  constructor(private fb: FormBuilder, private usersService: UsersService) { }
  clientForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.clientForm = this.fb.group({
      searchTerm:['',[Validators.required]],
      searchKeywords:['']
    })
    this.usersService.getUsers().subscribe(res=>{
      this.clientDataSource = res;
    })
  }

}
export class SelectOverviewExample {
  
}
