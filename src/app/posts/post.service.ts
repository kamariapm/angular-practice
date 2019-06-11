import { Post } from "./post.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
  //making it a private property keeps it from being edited from outside
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  //creating copy of posts and retriving them
  getPosts() {
    //immutability
    //spread operator--copying array
    //return [...this.posts];

    //instead removing spread operator and removing bindings in app component html file and from ts file
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}

//Dependency injection: getting service into components
