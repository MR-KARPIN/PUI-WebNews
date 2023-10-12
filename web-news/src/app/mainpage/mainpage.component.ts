import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoginService } from '../services/login/login.service';
import { NewsService } from '../services/news/news.service';
import { Article } from '../Interfaces/article';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

// Import other Angular Material modules as needed

// Import other Angular Material modules as needed

interface Article2 {
  abstract: string;
  aut: number;
  category: string;
  id: number;
  id_user: number;
  is_deleted: number;
  is_public: number;
  subtitle: string;
  thumbnail_image: string;
  thumbnail_media_type: string;
  title: string;
  update_date: string;
  username: string;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],

  
})
export class MainpageComponent implements OnInit {

  showLinks:boolean = false;
  // articleList?:Article[];
  isLoggedIn:boolean = false;
  term: string = ''; // Initialize it here
  articleList: Article[] = []; // Initialize it as an empty array
  categoryFilter: string = 'all'; // Default category filter
  filteredArticles: Article[] = [];


  constructor(private loginService:LoginService, private newsService:NewsService,
    private router:Router, private dialog: MatDialog) {
    this.newsService.getArticles().subscribe({
      next: articles => {
        if (articles){
          console.log("HER")
          console.log(articles)
          articles.forEach(article => {
            // @ts-ignore
            article.image_data = article.thumbnail_image
            // @ts-ignore
            article.image_media_type = article.thumbnail_media_type
            
          });
          this.articleList = articles
          console.log(this.articleList)
        }
      
      },
      error: error => {
        console.error(error);
        //TODO IMplemeNT ERROR HANDLING
      }
    });
    }

  ngOnInit(): void {
    this.loginService.isLoggedIn$().subscribe(status => {
      this.isLoggedIn = status;
    });

    // Check the initial login status
    this.isLoggedIn = this.loginService.isLogged();

    this.filterArticles();
  }

  setCategoryFilter(category: string): void {
    this.categoryFilter = category;
    this.filterArticles();
  }
  
  filterArticles() {
    console.log('Category Filter before filtering:', this.categoryFilter);
    if (this.categoryFilter === 'all') {
      this.filteredArticles = this.articleList; // Show all articles
    } else {
      this.filteredArticles = this.articleList.filter(article => article.category === this.categoryFilter);
    }
    console.log('Category Filter after filtering:', this.categoryFilter);
  }

  edit(id:number):void{
    this.router.navigate(['edit',id])
  }

  removeArticle(article: Article): void {
    // Open the confirmation dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to remove this article?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User confirmed deletion
        console.log(this.newsService.deleteArticle(article));
        const index = this.articleList.indexOf(article);
        if (index !== -1) {
          // Remove the article from the array
          this.articleList.splice(index, 1);
      
        }
    }
    });
  }

  

    openArticle(article:Article): void{
      this.router.navigate(["details",article.id])
    }
    





    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    myFunction(): void {
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
