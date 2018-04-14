import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navLinks: NavLink[] = [];

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.navLinks.push(new NavLink("New Customer", "new-customer"));
    this.navLinks.push(new NavLink("Look Up Customer", "lookup-customer"));
    this.navLinks.push(new NavLink("New Rent", "new-rent"));
  }

}

export class NavLink {
  public path: string;
  public label: string;
  constructor(label, path) {
    this.path = path;
    this.label = label;
  }
}
