import { Component } from '@angular/core';
import { Article } from '../article'

@Component({
  selector: 'app-article-creation-form',
  templateUrl: './article-creation-form.component.html',
  styleUrls: ['./article-creation-form.component.css']
})
export class ArticleCreationFormComponent {
  article: any = { // You can use a more specific type/interface here
    title: '',
    subtitle: '',
    category: '',
    abstract: '',
    body: ''
  };

  constructor() {} 

  addArticle(){}

}
