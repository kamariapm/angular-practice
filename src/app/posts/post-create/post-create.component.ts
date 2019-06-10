import { Component, EventEmitter, Output } from "@angular/core";
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();
  //newPost = "No Content";

  // onAddPost(postInput: HTMLTextAreaElement) {
  //console.dir(postInput);

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      // title: this.enteredTitle,  content: this.enteredContent
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
    // alert("post added");
    //this.newPost = this.enteredValue;
  }
}
