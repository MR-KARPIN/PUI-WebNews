import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news/news.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {map} from 'rxjs/operators'
import { Article } from '../Interfaces/article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit{

  article:Article = {id:0,
    title:"",
    subtitle:"",
    category:"",
    abstract:"",
    body:"",
    picture:"",};
  private articleList:Observable<Article[]>;

  constructor(private newsService:NewsService, private route:ActivatedRoute, private router:Router){
    this.articleList = this.newsService.getArticles()
    this.newsService.getArticle(Number(this.route.snapshot.paramMap.get("id"))).subscribe(
      (article:Article) =>{
        if(article){
          this.article = article
        }
        else{
          this.article = {
            id:0,
            title:"Something went wrong",
            subtitle:"",
            category:"",
            abstract:"",
            body:"",
            picture:"",
          }
        }
      }
    );
  }


  ngOnInit(): void {
  
  }


  
  routeBack() :void{
    this.router.navigate(["home"]);
  }
  


}
