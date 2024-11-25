import { Component } from '@angular/core';
import { Author } from '../../author.model';
import { AuthorService } from '../../service/author.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {
  authors: Author[] = [];
  filteredAuthors: Author[] = [];
  searchQuery: string = '';

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.authors = this.authorService.getAuthors();
    this.filteredAuthors = this.authors;
  }

  onSearch() {
    this.filteredAuthors = this.searchQuery
      ? this.authorService.searchAuthors(this.searchQuery)
      : this.authors;
  }
}
