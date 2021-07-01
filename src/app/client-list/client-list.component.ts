import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

interface Userchoice {
  value: string;
  userchoiceviewValue: string;
}

export interface PeriodicElement {
  id: string;
  phone: string;
  firstName: string;
  lastName: string;
  dateOfbirth: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '111',phone:'123',firstName:'Amit',lastName:'Dahari',dateOfbirth:new Date("01-07-2021") },
  {id: '222',phone:'0524336841',firstName:'Ben',lastName:'Cohen',dateOfbirth:new Date("01-07-1996") },
  {id: '333',phone:'0524113547',firstName:'Yaniv',lastName:'Tsioni',dateOfbirth:new Date("01-07-1997") },
];

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

  displayedColumns: string[] = ['Id', 'Phone', 'First Name', 'Last Name', 'Date of Birth'];
  clientDataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  constructor(private fb: FormBuilder) { }
  clientForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.clientForm = this.fb.group({
      searchTerm:['',[Validators.required]],
      searchKeywords:['']
    })
  }

}
export class SelectOverviewExample {
  
}
