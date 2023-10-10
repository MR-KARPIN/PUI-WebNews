import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ArticleCreationFormComponent } from './article-creation-form/article-creation-form.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArticleEditFormComponent } from './article-edit-form/article-edit-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent, 
    LoginFormComponent,
    ArticleCreationFormComponent,
    ArticleDetailsComponent,
    ArticleEditFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule, 
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
