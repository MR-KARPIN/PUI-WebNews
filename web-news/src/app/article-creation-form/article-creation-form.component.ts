import { Component } from '@angular/core';
import { Article } from '../Interfaces/article'
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-article-creation-form',
  templateUrl: './article-creation-form.component.html',
  styleUrls: ['./article-creation-form.component.css']
})
export class ArticleCreationFormComponent {
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
  constructor(private newsService : NewsService) {} 

  addArticle(){
    this.submitDone = true;
    console.log(this.newsService.createArticle(this.article).subscribe());
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

}
