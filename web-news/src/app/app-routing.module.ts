import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [{ path: 'login', component: LoginFormComponent },
  {path:"details/:id", component: ArticleDetailsComponent},
  // TODO PAUL
  //{path:"home",component:MainPageComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
