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
  imageError: null | string = "";
  isImageSaved: boolean = false;
  cardImageBase64: string = ""; 
  submitDone: boolean = false;
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

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const MAX_SIZE = 20971520;
      const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

      if (fileInput.target.files[0].size > MAX_SIZE) {
        this.imageError =
          'Maximum size allowed is ' + MAX_SIZE / 1000 + 'Mb';
        return false;
      }
      if (!ALLOWED_TYPES.includes(fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;

          this.article.image_media_type = fileInput.target.files[0].type;
          const head = this.article.image_media_type.length + 13;
          this.article.image_data = e.target.result.substring(head, e.target.result.length);

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
    return true;
  }

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.fileChangeEvent(file);
  //   }
  // }

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
  submitDone2: boolean = false;
  
  editArticle(){
    this.submitDone2 = true;
    console.log(this.article);
    this.newsService.updateArticle(this.article);
  }

  htmlToText(html: string): string {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = html;
    return temporaryElement.textContent || temporaryElement.innerText || '';
  }
}

