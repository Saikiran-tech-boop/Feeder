import { Injectable } from '@angular/core';
import { Author } from '../author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authorsData = new Map<number, Author>([
    [1, { id: 1, name: 'Alexander Hughes', bio: 'Award-winning Sci-Fi writer...', profilePicture: 'https://images.unsplash.com/photo-1600188768079-6df9f96e0b86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Sci-Fi', views: 300 }],
    [2, { id: 2, name: 'Christopher Brown', bio: 'Tech enthusiast with a knack...', profilePicture: 'https://plus.unsplash.com/premium_photo-1723600923697-54d5b19208b2?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Tech', views: 900 }],
    [3, { id: 3, name: 'Sophia Anderson', bio: 'Fashionista and stylist...', profilePicture: 'https://plus.unsplash.com/premium_photo-1683126009175-3dd736b3314e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Fashion', views: 300 }],
    
  ]);

  getAuthors() {
    return Array.from(this.authorsData.values());
  }

  searchAuthors(name: string): Author[] {
    return this.getAuthors().filter(author => author.name.toLowerCase().includes(name.toLowerCase()));
  }

}
