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
  abstract: "",
  aut: 0,
  category: "",
  id: 0,
  id_user: 0,
  is_deleted: 0,
  is_public: 0,
  body:"",
  subtitle: "",
  image_data: "",
  image_media_type: "",
  title: "",
  update_date: "",
  username: "",
};
  id : number = 0;
  private articleList:Observable<Article[]>;
  constructor(private route:ActivatedRoute, private router:Router,
    private newsService : NewsService) {

    this.articleList = this.newsService.getArticles()
    this.newsService.getArticle(Number(this.route.snapshot.paramMap.get("id"))).subscribe(
      (article:Article) =>{
        if(article){
          console.log(article);
          this.article = article;
          console.log(this.article);
        }
        else{
          this.article = {
            abstract: "",
            aut: 0,
            category: "",
            id: 0,
            id_user: 0,
            is_deleted: 0,
            is_public: 0,
            body:"",
            subtitle: "",
            image_data: "",
            image_media_type: "",
            title: "",
            update_date: "",
            username: "",
          }
        }
        this.article.abstract=this.htmlToText(this.article.abstract);
        this.article.body=this.htmlToText(this.article.body);

      }
    );

  } 

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
  }

  ngOnInit(): void {}
  a2: Article = {
    abstract: "",
    aut: 0,
    category: "",
    id: 0,
    id_user: 0,
    is_deleted: 0,
    is_public: 0,
    body:"",
    subtitle: "",
    image_data: "",
    image_media_type: "",
    title: "",
    update_date: "",
    username: "",
  };
  submitDone: boolean = false;
  
  editArticle(){
    this.submitDone = true;
    console.log(this.article);
    this.newsService.updateArticle(this.article);
  }

  htmlToText(html: string): string {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = html;
    return temporaryElement.textContent || temporaryElement.innerText || '';
  }
}

