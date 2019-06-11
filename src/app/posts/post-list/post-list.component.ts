import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostsService } from "../post.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   // { title: "first post", content: "this is the first post" },
  //   // { title: "second post", content: "this is the 2nd post" },
  //   // { title: "third post", content: "this is the 3rd post" }
  // ];

  //
  posts: Post[] = [];
  // postsService: PostsService
  //   constructor(postsService: PostsService) {
  //     this.postsService= postsService
  //   }

  private postsSub: Subscription;
  constructor(public postsService: PostsService) {}
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postsSub.unsubscribe();
  }
}
