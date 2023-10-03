import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCreationFormComponent } from './article-creation-form.component';

describe('ArticleCreationFormComponent', () => {
  let component: ArticleCreationFormComponent;
  let fixture: ComponentFixture<ArticleCreationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleCreationFormComponent]
    });
    fixture = TestBed.createComponent(ArticleCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
