import { Component,OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';
import { filter,takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClientsStock';
  homeSelected:boolean = true;
  managerSelected:boolean= false;
  searchSelected:boolean = false;
  private destroyed$ = new Subject();
  constructor(private router:Router) {}
  ngOnInit(): void {
    
  //  this.router.events
  //   .pipe(
  //    filter((event:RouterEvent) => event instanceof NavigationStart),
  //    takeUntil(this.destroyed$),
  //  ).subscribe((event:NavigationStart)=>{
  //    console.log(event);
  //  })
  }

  gotToHomePage(){
    this.homeSelected = true;
    this.managerSelected = this.searchSelected = false;
    this.router.navigate(['']);
  }
  goToClientPage(){
    this.managerSelected = true;
    this.homeSelected = this.searchSelected = false;
    this.router.navigate(['/manager']);
  }
  gotoClientSearchPage(){
    this.searchSelected = true;
    this.managerSelected = this.homeSelected = false;
    this.router.navigate(['/search']);
    
  }
}
