import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template:`<p [class]="multiplecss"> Ujjwal Technical Tips</p> 
  `,
  styles:[`.fontcolor{color:blue;font-size:45px;} .bgColor{background-color:lightblue;} .head{text-align:center;}`],
})
export class AppComponent {
 multiplecss:string = "fontcolor bgColor head";
}
