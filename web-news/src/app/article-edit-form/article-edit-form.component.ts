import { Component, OnInit } from '@angular/core';
import { Article } from '../Interfaces/article';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-article-edit-form',
  templateUrl: './article-edit-form.component.html',
  styleUrls: ['./article-edit-form.component.css']
})
export class ArticleEditFormComponent implements OnInit {
 article:Article = {
    id:0,
    title:"",
    subtitle:"",
    category:"",
    abstract:"",
    body:"",
    picture:""
  };
  id : number = 0;
  private articleList:Observable<Article[]>;
  constructor(private route:ActivatedRoute, private router:Router,
    private newsService : NewsService) {

    this.articleList = this.newsService.getArticles()
    this.newsService.getArticle(Number(this.route.snapshot.paramMap.get("id"))).subscribe(
      (article:Article) =>{
        if(article){
          this.article = article;
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
        this.article.abstract=this.htmlToText(this.article.abstract);
        this.article.body=this.htmlToText(this.article.body);

      }
    );

  } 

  ngOnInit(): void {}

  editArticle(){
    this.newsService.updateArticle(this.article);
  }

  htmlToText(html: string): string {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = html;
    return temporaryElement.textContent || temporaryElement.innerText || '';
  }

}

