import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';

interface Userchoice {
  value: string;
  userchoiceviewValue: string;
  selected: boolean;
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
    {value: 'id-value', userchoiceviewValue: 'Id', selected:true},
    {value: 'phone-value', userchoiceviewValue: 'Phone', selected:false},
    
  ];

  defaultOption: string = "id-value"
  displayedColumns: string[] = [ 'Id', 'Phone', 'First Name', 'Last Name'];
  clientDataSource :any
  search:string ="";
  searchOption: number=0;
  error:any;
  data:any;
  constructor(private fb: FormBuilder, private usersService: UsersService, private navigate: Router, private http: HttpClient) { }
  clientForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    //Getting title from json
    this.http.get('/assets/config.json')
    .toPromise().then(data =>{
      this.data = data
      
    })

    this.clientForm = this.fb.group({
      searchTerm:['',[Validators.required]],
      searchKeywords:['']
    })
    this.usersService.getUsers().subscribe(res=>{
      this.clientDataSource = res;
    })
  }

  edit(row: any){
    
     this.navigate.navigate(['/edit'],{state: {user: row}})
  }

  searchButtonClick(){
    this.error ="";
    switch(this.searchOption){
      case 0: {
        this.usersService.getUserbyId(this.search).subscribe(res =>{
          this.clientDataSource = res
          
        }
          , err =>{
            
            this.error = err.statusText
            this.clientDataSource=[]
          } )
          break;
      }
      case 1: {
        this.usersService.getUserbyPhone(this.search).subscribe(res =>{
      
          this.clientDataSource = res
          
        },
           err =>{
            
            this.error = err.statusText
            this.clientDataSource=[]
          }
          );
          break;
      }
      default : {
        this.usersService.getUsers().subscribe(res=>{
          this.clientDataSource = res;
        },
         err =>{
          
          this.error = err.statusText
          this.clientDataSource=[]
        })
        break;
      }
      
    }
  }

  changeClient(value:string){
    switch(value){
      case "id-value":
        { this.searchOption = 0;
         break;
        }
      case "phone-value":{
        this.searchOption =1;
         break;
      } 
      default:  this.searchOption =0;
      break;
    }

  }

}
export class SelectOverviewExample {
  
}
