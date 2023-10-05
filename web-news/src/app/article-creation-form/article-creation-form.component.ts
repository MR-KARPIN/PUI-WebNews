import { Component } from '@angular/core';
import { Article } from '../article'
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-article-creation-form',
  templateUrl: './article-creation-form.component.html',
  styleUrls: ['./article-creation-form.component.css']
})
export class ArticleCreationFormComponent {
  article: any = { 
    title: '',
    subtitle: '',
    category: '',
    abstract: '',
    body: ''
  };

  constructor(private newsService : NewsService) {} 

  addArticle(){
    this.newsService.createArticle(this.article);
  }




}
