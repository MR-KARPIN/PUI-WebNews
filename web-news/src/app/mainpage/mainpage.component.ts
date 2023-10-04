import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
// Import other Angular Material modules as needed

// Import other Angular Material modules as needed

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],

  
})
export class MainpageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setupNavbarToggle();
  }

  setupNavbarToggle() {
    // JavaScript to toggle the visibility of the navbar links on small screens
    const navbarLinks = document.querySelector('.navbar-links');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbarLinks && navbarToggler) {
      navbarToggler.addEventListener('click', () => {
        navbarLinks.classList.toggle('show-links');
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
          navbarLinks.classList.remove('show-links');
        }
      });
    }
  }
}


