export interface Comment{
  id: number;
  author: string;
  time: string;
  text: string;
  replies: Comment[];
}

export interface Article {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  author: string;
  publishDate: string;
  popularity: number;
  views:number;
  readTime:number;
  date:string;
  category:string;
  isFeatured: boolean;
  editorPick: boolean;
  isBookmarked: boolean;
  comments: Comment[];
  tags: string[];
}



  