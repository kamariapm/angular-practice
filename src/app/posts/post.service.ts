import { Post } from "./post.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PostsService {
  //making it a private property keeps it from being edited from outside
  private posts: Post[] = [];

  getPosts() {
    //immutability
    //spreas operator--copying array
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
  }
}

//Dependency injection: getting service into components
