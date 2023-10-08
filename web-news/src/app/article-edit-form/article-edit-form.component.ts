import { Component, OnInit } from '@angular/core';
import { Article } from '../Interfaces/article';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-article-edit-form',
  templateUrl: './article-edit-form.component.html',
  styleUrls: ['./article-edit-form.component.css']
})
export class ArticleEditFormComponent implements OnInit {
    article: any = { 
    title: '',
    subtitle: '',
    category: '',
    abstract: '',
    body: ''
  };
  id : number = 0;
  constructor(private route: ActivatedRoute,
    private newsService : NewsService) {} 

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(queryParams => {
      const idQueryParam = queryParams.get("id");
      if (idQueryParam !== null) {
        this.id = parseInt(idQueryParam, 10); // Use parseInt to parse as an integer
      } 
    })

    this.article = this.newsService.getArticle(this.id);
  }

  editArticle(){
    this.newsService.updateArticle(this.article);
  }

}

