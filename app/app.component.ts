import { Component, ViewEncapsulation } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None
  
})
export class AppComponent {
  oddFlag = false;

  title = 'structural-directives';

  oddNumbers = [1,3,5,7];
  evneNumbers = [2,4,6,8];
  

}
