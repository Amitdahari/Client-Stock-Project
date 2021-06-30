import { Component, OnInit } from '@angular/core';

interface Userchoice {
  value: string;
  userchoiceviewValue: string;
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
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
export class SelectOverviewExample {
  
}
