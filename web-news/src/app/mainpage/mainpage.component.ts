import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoginService } from '../services/login/login.service';
import { NewsService } from '../services/news/news.service';
import { Article } from '../Interfaces/article';
import { Router } from '@angular/router';
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
  articleList?:Article[];
  isLoggedIn:boolean = false;


  constructor(private loginService:LoginService, private newsService:NewsService,private router:Router) {
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
  }

  edit(id:number):void{
    this.router.navigate(['edit',id])
  }

  removeArticle(article:Article):void{
    
    this.newsService.deleteArticle(article);
  }

  openArticle(article:Article){
    this.router.navigate(["details",article.id])
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