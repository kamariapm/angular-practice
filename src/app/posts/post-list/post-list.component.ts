import { Component } from "@angular/core";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent {
  posts = [
    // { title: "first post", content: "this is the first post" },
    // { title: "second post", content: "this is the 2nd post" },
    // { title: "third post", content: "this is the 3rd post" }
  ];
}
