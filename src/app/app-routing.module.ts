import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientManagerComponent } from './client-manager/client-manager.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'',redirectTo: '/home', pathMatch:'full'},
 {path:'manager', component:ClientManagerComponent},
 {path:'search',component:ClientListComponent},
 {path:'edit', component:EditClientComponent},
 {path:'**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
