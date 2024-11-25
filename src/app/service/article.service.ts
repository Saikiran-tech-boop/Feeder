import { Article} from '../article.model';
import { signal, computed, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articlesData: Map<number, Article> = new Map([
    [
      1,
      {
        id: 1,
        title: 'Hyderabad List',
        thumbnail:
          'https://images.unsplash.com/photo-1721332149371-fa99da451baa?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
        author: 'kasam',
        publishDate: '2024-01-01',
        popularity: 10,
        views: 10,
        date: 'Yesterday',
        readTime: 14,
        category: 'Tech',
        isFeatured: true,
        editorPick: false,
        isBookmarked: false,
        tags:["new","ep"],
        comments: [
          {
            id: 101,
            author: 'Anna',
            time: '12:05 PM',
            text: 'This is really insightful!',
            replies: [
              {
                id: 102,
                author: 'suji',
                time: '12:10 pm',
                text: 'I agree! Blockchain is fascinating.',
                replies: [
                  {
                    id: 104,
                    author: 'suresh',
                    time: '1:15 PM',
                    text: 'AI will change the future!',
                    replies: [
                      {
                        id: 105,
                        author: 'ramesh',
                        time: '1:20 pm',
                        text: 'Absolutely, it’s already happening!',
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    [
      2,
      {
        id: 2,
        title: 'Lorem',
        thumbnail:
          'https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
        author: 'Rahul',
        publishDate: '2024-02-01',
        popularity: 2000,
        views: 300,
        date: 'Yesterday',
        readTime: 14,
        category: 'Tech',
        isFeatured: false,
        editorPick: true,
        isBookmarked: false,
        tags:["hyd","ep"],
        comments: [
          {
            id: 104,
            author: 'suresh',
            time: '1:24 pm',
            text: 'AI will change the future!',
            replies: [
              {
                id: 105,
                author: 'Aniv',
                time: '1:30 pm',
                text: 'Absolutely, it’s already happening!',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
    [
      3,
      {
        id: 3,
        title: 'Tesla shares',
        thumbnail:
          'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
        author: 'kiran',
        publishDate: '2023-03-01',
        popularity: 5000,
        views: 200,
        date: 'Yesterday',
        readTime: 14,
        category: 'Fashion',
        isFeatured: false,
        editorPick: true,
        isBookmarked: true,
        comments: [],
        tags:["hh","1"]
      },
    ],
    [
      4,
      {
        id: 4,
        title: 'BMW',
        thumbnail:
          'https://plus.unsplash.com/premium_photo-1683134237608-cc2ebbfe18c8?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: ' BMW Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
        author: 'saikiran',
        publishDate: '2023-03-01',
        popularity: 5000,
        views: 200,
        date: 'Yesterday',
        readTime: 14,
        category: 'AI',
        isFeatured: false,
        editorPick: true,
        isBookmarked: true,
        tags:["wqp","ep"],
        comments: [
          {
            id: 104,
            author: 'Sai',
            time: '6:30 pm',
            text: 'AI will change the future!',
            replies: [
              {
                id: 105,
                author: 'Kiran',
                time: '10:00 pm',
                text: 'Absolutely, it’s already happening!',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  ]);

  private sortBy = signal('publishDate');
  private searchQuery = signal('');
  

  private articles = signal<Article[]>(Array.from(this.articlesData.values()));

  saveArticle(article: Article) {
    this.articlesData.set(article.id, article);
  }

  addArticle(newArticle: Article):void{
    this.articlesData.set(newArticle.id, newArticle);
    this.articles.update(()=>Array.from(this.articlesData.values()));

  }

  getArticles() {
    return Array.from(this.articlesData.values());
  }

  getArticleById(id: number): Article | undefined {
    return this.articlesData.get(id);
  }

  getArticlesById(id: number): Article | undefined {
    return this.articlesData.get(id);
  }

  filteredArticles = computed(() => {
    let filtered = this.articles();

    if (this.searchQuery()) {
      filtered = filtered.filter(
        (article) =>
          article.title
            .toLowerCase()
            .includes(this.searchQuery().toLowerCase()) ||
          article.description
            .toLowerCase()
            .includes(this.searchQuery().toLowerCase())
      );
    }

    if (this.sortBy() === 'publishDate') {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      );
    } else if (this.sortBy() === 'popularity') {
      filtered = filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (this.sortBy() === 'editorPick') {
      filtered = filtered.filter((article) => article.editorPick);
    }

    return filtered;
  });

  setSortBy(sort: string) {
    this.sortBy.set(sort);
  }

  setSearchQuery(query: string) {
    this.searchQuery.set(query);
  }

  toggleBookmark(article: Article): void {
    article.isBookmarked = !article.isBookmarked;
  }
}
