import { Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-otra-informacion',
  templateUrl: './otra-informacion.component.html',
  styleUrls: ['./otra-informacion.component.scss']
})
export class OtraInformacionComponent implements OnInit{

  public colSize=2;
  public isMobile: boolean = false;

  constructor(breackpointObserver: BreakpointObserver){
    breackpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result=>{
      this.isMobile=result.matches;
        if(this.isMobile){
          this.colSize=1;
        }
        else{
          this.colSize=2;
        }
    });
  }

  ngOnInit(): void {}
}
