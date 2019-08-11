import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular8routing';

  navbaropen=false;
  toggleNavbar(){
    this.navbaropen=!this.navbaropen;
  }
}
