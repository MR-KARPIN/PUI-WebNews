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
  showLinks:boolean = false;
  constructor() {}

  ngOnInit(): void {
    
  }

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x) { // Check if x is not null
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
}