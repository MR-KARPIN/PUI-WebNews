import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news/news.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {map} from 'rxjs/operators'
import {Article} from '../Interfaces/article';





@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit{

  article:Article = {
    aut:0,
    abstract: "",
    body: "",
    category: "",
    id: 0,
    id_user: 0,
    image_data: "",
    image_media_type: "",
    is_deleted: 0,
    is_public: 0,
    subtitle: "",
    title: "",
    update_date: "",
    username: "",
  };
  

  constructor(private newsService:NewsService, private route:ActivatedRoute, private router:Router){

    this.newsService.getArticle(Number(this.route.snapshot.paramMap.get("id"))).subscribe(
      (article:Article) =>{
        if(article){
          console.log(article)
          this.article = article
        }
        else{
          this.article= {
            aut:0,
            abstract: "",
            body: "",
            category: "",
            id: 0,
            id_user: 0,
            image_data: "",
            image_media_type: "",
            is_deleted: 0,
            is_public: 0,
            subtitle: "",
            title: "",
            update_date: "",
            username: "",
          };
          
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
