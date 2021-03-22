import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  navCheck: boolean;
  navShow = 0;
  navLinks = 0;
  headerMargin = 0;
  onChange(checked: Event){
    if (checked){
      this.navShow = 1;
      this.navLinks = 1;
      this.headerMargin = 10;
    }
    if (!checked){
      this.navShow = 0;
      this.navLinks = 0;
      this.headerMargin = 0;
    }
  }
}
