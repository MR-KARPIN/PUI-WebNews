import { Component } from '@angular/core';
import { Article } from '../Interfaces/article'
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
  submitDone: boolean = false;
  constructor(private newsService : NewsService) {} 

  addArticle(){
    this.submitDone = true;
    console.log(this.newsService.createArticle(this.article).subscribe());
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
  }


}
