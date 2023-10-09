import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ArticleEditFormComponent } from './article-edit-form/article-edit-form.component';
import { ArticleCreationFormComponent } from './article-creation-form/article-creation-form.component';
import { MainpageComponent } from './mainpage/mainpage.component';
const routes: Routes = [
  {path: 'login', component: LoginFormComponent}, 
  {path: 'edit', component: ArticleEditFormComponent}, 
  {path: 'create', component: ArticleCreationFormComponent},
  {path: 'main', component: MainpageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
