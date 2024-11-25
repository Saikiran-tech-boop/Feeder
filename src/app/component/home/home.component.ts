import { Component, computed, OnInit,signal } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  searchQuery = signal('');  
  selectedSort = signal('publishDate');  
  article = signal<Article[]>([]);
  bookmarkedArticles = new Set<number>();

  
  get articles(){
    return this.articleService.filteredArticles; 
  }
   
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {}

  
  onSearch(): void {
    this.articleService.setSearchQuery(this.searchQuery());
  }
  
  
  onSortChange(sortBy: string): void {
    this.articleService.setSortBy(sortBy);
    this.selectedSort.set(sortBy);
  }

  bookmarkedArticlesList = computed(()=> this.articles().filter(article => this.bookmarkedArticles.has(Number(article.id))));

  toggleBookmark(articleId: number): void {
    if (this.bookmarkedArticles.has(articleId)) {
      this.bookmarkedArticles.delete(articleId); 
    } else {
      this.bookmarkedArticles.add(articleId); 
    }
  }

  isBookmarked(articleId: number): boolean {
    return this.bookmarkedArticles.has(articleId);
  }

  searchTag: string = '';

  //This code is for Tag search... as of now it is in progress so commented out the code.
  
  // filteredArticles = [...this.articles()];


  // filterByTag(): void {
  //   this.filteredArticles = this.articles().filter((article) =>
  //     article.tags.some((tag) =>
  //       tag.toLowerCase().includes(this.searchTag.toLowerCase())
  //     )
  //   );
  // }
}
