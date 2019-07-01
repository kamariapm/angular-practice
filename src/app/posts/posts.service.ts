import { Post } from "./post.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
  //making it a private property keeps it from being edited from outside
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  //creating copy of posts and retriving them
  getPosts() {
    this.http
      .get<{ message: string; posts: Post[] }>("http:/localhost:3000/api/posts")
      .subscribe(postData => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
    //immutability
    //spread operator--copying array
    //return [...this.posts];

    //instead removing spread operator and removing bindings in app component html file and from ts file
    //return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}

//Dependency injection: getting service into components
