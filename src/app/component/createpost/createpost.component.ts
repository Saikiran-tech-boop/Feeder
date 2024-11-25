import { Component, inject } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../article.model';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.css'
})
export class CreatepostComponent {
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem("loggerInUser")!).name;
  article: Article = {
    id: 0,
    title: '',
    description: '',
    category: '',
    thumbnail: '',
    publishDate: '',
    tags: [],
    author: this.name,
    popularity: 0,
    views: 1,
    readTime: 10,
    date: 'Today',
    isFeatured: false,
    editorPick: false,
    isBookmarked: false,
    comments: []
  };

  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ header: [1, 2, 3, false] }],
    ],
  };

  newTag = '';
  showPreview = false; 

  constructor(private articleService: ArticleService, private router: Router) {}

  publish(): void {
    if (this.article.title.trim() && this.article.description.trim()) {
      this.article.id = Date.now(); 
      this.article.publishDate = new Date().toISOString();
      this.articleService.addArticle({ ...this.article });
      alert('Article published successfully!');
      this.router.navigate(['/home']);
    } else {
      alert('Please complete all fields before publishing!');
    }
  }

  preview(): void {
    if (this.article.title.trim() && this.article.description.trim()) {
      this.showPreview = true; 
    } else {
      alert('Please complete all fields to preview the article!');
    }
  }

  closePreview(): void {
    this.showPreview = false; 
  }

  addTag(): void {
    if (this.newTag.trim() && !this.article.tags.includes(this.newTag)) {
      this.article.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }

  removeTag(tag: string): void {
    this.article.tags = this.article.tags.filter((t) => t !== tag);
  }
  uploadThumbnail(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.article.thumbnail = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}