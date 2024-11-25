import { Component, inject, OnInit } from '@angular/core';
import { Article, Comment } from '../../article.model';
import { ArticleService } from '../../service/article.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{

  article: Article | undefined;
  isSidebarOpen = false;
  newCommentText = '';
  replyText = '';
  replyToCommentId: number | null = null;
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem("loggerInUser")!).name;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit() {
    const articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.articleService.getArticlesById(articleId);
  }

  sortOption:string = 'newest';


  
  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  addComment() {
    if (this.newCommentText.trim() && this.article) {
      const newComment: Comment = {
        id: Date.now(),
        author: this.name,
        time: new Date().toLocaleTimeString(),
        text: this.newCommentText,
        replies: []
      };
      this.article.comments.push(newComment);
      this.newCommentText = '';
    }
  }

  addReply(commentId: number) {
    if (this.replyText.trim() && this.article) {
      const newReply: Comment = {
        id: Date.now(),
        author: this.name,
        time: new Date().toLocaleTimeString(),
        text: this.replyText,
        replies: []
      };
      const parentComment = this.findCommentById(this.article.comments, commentId);
      if (parentComment) {
        parentComment.replies.push(newReply);
      }
      this.replyText = '';
      this.replyToCommentId = null;
    }
  }

  private findCommentById(comments: Comment[], id: number): Comment | undefined {
    for (const comment of comments) {
      if (comment.id === id) return comment;
      const nestedComment = this.findCommentById(comment.replies, id);
      if (nestedComment) return nestedComment;
    }
    return undefined;
  }

  openReplyBox(commentId: number) {
    this.replyToCommentId = commentId;
  }

  selectedSort: string = 'newest'; 

  sortParentComments(): void {
    if (!this.article) return;

    const parseTime = (time: string): number => {
      const [hour, minutePart] = time.split(':');
      const minute = parseInt(minutePart.slice(0, 2));
      const meridian = minutePart.slice(-2).toUpperCase();
      let parsedHour = parseInt(hour);

      if (meridian === 'PM' && parsedHour !== 12) {
        parsedHour += 12;
      } else if (meridian === 'AM' && parsedHour === 12) {
        parsedHour = 0;
      }

      return parsedHour * 60 + minute; 
    };

    if (this.selectedSort === 'newest') {
      this.article.comments.sort(
        (a, b) => parseTime(b.time) - parseTime(a.time)
      );
    } else if (this.selectedSort === 'oldest') {
      this.article.comments.sort(
        (a, b) => parseTime(a.time) - parseTime(b.time)
      );
    }
  }
}
