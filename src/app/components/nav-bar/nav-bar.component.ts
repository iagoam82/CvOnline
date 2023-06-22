import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public isMobile: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
    Breakpoints.Handset
  ]).subscribe(result=>{
    this.isMobile=result.matches;
      if(this.isMobile){
        this.isMobile=true;
      }
  });
  }

}
