import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  activaRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activaRoute = event.url;
      }
    })
  }
}
